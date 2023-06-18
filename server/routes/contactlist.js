/* 
Student Name: Andre Henrique Moyses de Assis
Student number: 301282773
File: contactlist.js
Date: 2023-06-17
*/

let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let passport = require('passport');

// connect to our Game Model
let ContactList = require('../models/contactlist');

let contactListController = require('../controllers/contactlist')

function requireAuth(req, res, next)
{
    //check is the user is logged in
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}

// Get Route for the Contact List page - READ Operation
router.get('/', requireAuth, contactListController.displayContactList);

// Get Route for displaying the Add page - Create Operation
router.get('/add', requireAuth, contactListController.displayAddPage);

// Post Route for processing the Add page - Create Operation
router.post('/add', requireAuth, contactListController.processAddPage);

//Get Route for displaying the Edit Page - UPDATE Operation
router.get('/edit/:id', requireAuth, contactListController.displayEditPage);

// Post Route for processing the Edit Page - UPDATE Operation
router.post('/edit/:id', requireAuth, contactListController.processEditPage);

// Get to perform Deletion - DELETE Operation
router.get('/delete/:id', requireAuth, contactListController.performDelete);

module.exports = router;