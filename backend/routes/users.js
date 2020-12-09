var express = require('express');
var router = express.Router();

var User = require('../models/user')

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
    return res.status(501).json({message: "Error registering user."})
  })
})

module.exports = router;
