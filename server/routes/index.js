/* 
Student Name: Andre Henrique Moyses de Assis
Student number: 301282773
File: index.js
Date: 2023-06-17
*/

var express = require('express');
var router = express.Router();

let indexController = require('../controllers/index')

/* GET home page. */
router.get('/', indexController.displayHomePage);

/* GET home page. */
router.get('/home', indexController.displayHomePage);

/* GET about page. */
router.get('/about',  indexController.displayAboutPage);

/* GET products page. */
router.get('/projects',  indexController.displayProjectsPage);

/* GET services page. */
router.get('/services',  indexController.displayServicesPage);

/* GET contact page. */
router.get('/contact',  indexController.displayContactPage);

//Auth Routes

/* GET Route for displaying LogIn page. */
router.get('/login', indexController.displayLoginPage);

/* Post Route for processing LogIn page. */
router.post('/login', indexController.processLoginPage);

/* GET Route for displaying the register page */
router.get('/register', indexController.displayRegisterPage);

/* Post Route for processing the register page. */
router.post('/register', indexController.processRegisterPage);

/* GET Route for performing UserLogout */
router.get('/logout', indexController.performLogout);


module.exports = router;

