/* 
Student Name: Andre Henrique Moyses de Assis
Student number: 301282773
File: users.js
Date: 2023-06-17
*/


var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
