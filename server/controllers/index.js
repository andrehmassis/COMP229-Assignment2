var express = require('express');
var router = express.Router();

module.exports.displayHomePage = function(req, res, next) {
    res.render('index', { title: 'Express' });
};

module.exports.displayAboutPage = function(req, res, next) {
    res.render('about', { title: 'About' });
}
module.exports.displayProjectsPage = function(req, res, next) {
    res.render('projects', { title: 'Products' });
}
module.exports.displayServicesPage = function(req, res, next) {
    res.render('services', { title: 'Services' });
}
module.exports.displayContactPage = function(req, res, next) {
    res.render('contact', { title: 'Contact Us' });
}
module.exports.displayLogintPage = function(req, res, next) {
    res.render('login', { title: 'LogIn' });
}