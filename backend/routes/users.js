const express = require('express')
const jwt = require('jsonwebtoken')
const crypto = require('crypto')

let router = express.Router()
let User = require('../models/user')
let secret = crypto.randomBytes(20).toString('hex');
let decodedToken = ''

// Pegar todos os usuários
router.get('/get', async (req, res) => {
  const users = await User.find({});
  try {
    res.status(200).send(users);
  } catch (err) {
    res.status(501).send(err);
  }
});

// Pegar um usuário pelo ID
router.get('/get_id/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id)

    if (!user) res.status(404).send("Nenhum usuário encontrado.")
    res.status(200).send(user)
  } catch (err) {
    res.status(501).json({message: err})
  }
})

// Remover um usuário
router.delete('/delete/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id)

    if (!user) res.status(404).send("Nenhum usuário encontrado.")
    res.status(200).send()
  } catch (err) {
    res.status(501).json({message: err})
  }
})

// Alterar um usuário
router.patch('/patch/:id', async (req, res) => {
  try {
    await User.findByIdAndUpdate(req.params.id, req.body)
    await User.save()
    res.status(200).send()
  } catch (err) {
    res.status(501).send(err)
  }
})

// Registrar um usuário
router.post('/register', function(req,res,next) {
  let user = new User({
    name: req.body.name,
    email: req.body.email,
    password: User.hashPassword(req.body.password),
    phone: req.body.phone,
    creation_date: Date.now(),
    description: "",
    linkedin: "",
    instagram: "",
    github: "",
    site: "",
  })

  let promise = user.save()

  promise.then(function(doc) {
    return res.status(201).json(doc)
  })

  promise.catch(function(err) {
    return res.status(501).send(err)
  })
})

// Logar um usuário 
router.post('/login', function(req, res, next) {
  let promise = User.findOne({email: req.body.email}).exec()

  promise.then(function(doc) {
    if(doc){
      if(doc.isValid(req.body.password)){
        let token = jwt.sign({user: doc}, secret, {expiresIn: '2h'});
        
        return res.status(200).json(token)
      } else {
        return res.status(501).json({message: "Credenciais inválidas."})
      }
    } else {
      return res.status(501).json({message: "E-mail não cadastrado."})
    }
  })

  promise.catch(function(err) {
    return res.status(501).json({message: "Ocorreu um erro, tente novamente."})
  })
}) 

// Informações do usuário logado
router.get('/user', verifyToken, function(req, res, next) {
  return res.status(200).json(decodedToken.user)
})


// Outras funções 
function verifyToken(req,res,next){
  let token = req.query.token;

  jwt.verify(token, secret, function(err, tokendata){
    if(err){
      return res.status(400).json({message: "Acesso não autorizado."})
    }
    if(tokendata){
      decodedToken = tokendata
      next()
    }
  })
}

module.exports = router;
