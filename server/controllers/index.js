/* 
Student Name: Andre Henrique Moyses de Assis
Student number: 301282773
File: index.js
Date: 2023-06-17
*/

let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let passport = require('passport');

//Create the User Model Instance
let userModel = require('../models/user');
let User = userModel.User; // Alias

module.exports.displayHomePage = function(req, res, next) {
    res.render('index', { title: 'Home', displayName: req.user ? req.user.displayName : '' });
};

module.exports.displayAboutPage = function(req, res, next) {
    res.render('about', { title: 'About', displayName: req.user ? req.user.displayName : '' });
};

module.exports.displayProjectsPage = function(req, res, next) {
    res.render('projects', { title: 'Products', displayName: req.user ? req.user.displayName : '' });
};

module.exports.displayServicesPage = function(req, res, next) {
    res.render('services', { title: 'Services', displayName: req.user ? req.user.displayName : '' });
};

module.exports.displayContactPage = function(req, res, next) {
    res.render('contact', { title: 'Contact Us', displayName: req.user ? req.user.displayName : '' });
};

//Module Login Page

module.exports.displayLoginPage = function(req, res, next) {
    //Check if the user is already logged in
    if(!req.user){
        res.render('auth/login', {
            
            title:'Login',
            messages: req.flash('loginMessage'),
            displayName: req.user ? req.user.displayName : ''
        })
    } 
    else{
        return res.redirect('/')
    }
};
module.exports.processLoginPage = function(req, res, next) {
    passport.authenticate('local', (err, user, info) => {
        //server has any erros?
        if(err){
            return next(err);
        }
        //if there is a user login error
        if(!user){
            req.flash('loginMessage', 'Authentication Error');
            return res.redirect('/login');
        }
        req.login(user, (err) =>{
            //server error?
            if(err){
                return next(err);
            }
            return res.redirect('contact-list');        
        });
    })(req, res, next);
};
module.exports.displayRegisterPage = function(req, res, next) {
    //Check if the user is already logged in
    if(!req.user){
        res.render('auth/register', {
            
            title:'Register',
            messages: req.flash('registerMessage'),
            displayName: req.user ? req.user.displayName : ''
        })
    } 
    else{
        return res.redirect('/')
    }
};

module.exports.processRegisterPage = function(req, res, next) {
    //Instantiate an user Obj
    let newUser = new User({
        username: req.body.username,
        email: req.body.email,
        displayName: req.body.displayName
    });

    User.register(newUser, req.body.password, (err) =>{
        if(err){
            console.log(err);
            console.log("Error: Inserting New User");
            if(err.name == "UserExistsError"){
                req.flash(
                    'registerMessage',
                    'Registration Error: User Already Exist!'
                )
                console.log('Error: User Alreay Exists!');
            }
            return res.render('auth/register', {
                title: "Register",
                messages: req.flash('registerMessage'),
                displayName: req.user ? req.user.displayName: ''

            });
        }
        else{
            // If resgistration is successful
            return passport.authenticate('local')(req, res, () =>{
                res.redirect('/contact-list')
            });
        }

    });

};

module.exports.performLogout = (req, res, next) =>{
    req.logout((err) => {
        if (err) {
            console.log(err);
            return next(err);
        }
        return res.redirect('/');
    });
}
