const express = require('express')
const jwt = require('jsonwebtoken')
const crypto = require('crypto')

var router = express.Router()
var User = require('../models/user')
var secret = crypto.randomBytes(20).toString('hex');

// Registrar novo usuário
router.post('/register', function(req,res,next) {
  var user = new User({
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
    return res.status(501).json({message: "Ocorreu um erro, tente novamente."})
  })
})

// Logar um usuário existente
router.post('/login', function(req, res, next) {
  let promise = User.findOne({email: req.body.email}).exec()

  promise.then(function(doc) {
    if(doc){
      if(doc.isValid(req.body.password)){
        let token = jwt.sign({email: doc.email}, secret, {expiresIn: '2h'});
        
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
  return res.status(200).json(decodedToken.email)
})

var decodedToken = ''

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
