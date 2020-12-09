var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send({message: "Welcome to Danilo's blog API"})
});

module.exports = router;
