let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// connect to our Game Model
let ContactList = require('../models/contactlist');

let contactListController = require('../controllers/contactlist')

// Get Route for the Contact List page - READ Operation
router.get('/', contactListController.displayContactList);

// Get Route for displaying the Add page - Create Operation
router.get('/add', contactListController.displayAddPage);

// Post Route for processing the Add page - Create Operation
router.post('/add', contactListController.processAddPage);

//Get Route for displaying the Edit Page - UPDATE Operation
router.get('/edit/:id', contactListController.displayEditPage);


// Post Route for processing the Edit Page - UPDATE Operation
router.post('/edit/:id', contactListController.processEditPage);

// Get to perform Deletion - DELETE Operation
router.get('/delete/:id', contactListController.performDeletion);

module.exports = router;