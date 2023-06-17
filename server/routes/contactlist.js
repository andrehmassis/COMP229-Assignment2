let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// connect to our Game Model
let Contact = require('../models/contactlist');

// Get Route for the Contact List page - READ Operation
router.get('/', async (req, res, next) =>{
    try{
        let contactList = await Contact.find();
        console.log(contactList)
        
        res.render('contactlist', {title: 'Business Contact List', ContactList : contactList})
    } catch (err) {
        console.error(err);
    }
});

module.exports = router;