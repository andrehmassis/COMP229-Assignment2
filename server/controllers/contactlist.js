let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// Create a reference to the Model
let ContactList = require('../models/contactlist');

module.exports.displayContactList = async (req, res, next) =>{
    try{
        let contactList = await ContactList.find();
        console.log(contactList)
        
        res.render('businessContact/contactlist', {title: 'Business Contact List', ContactList : contactList})
    } catch (err) {
        console.error(err);
    }
};
module.exports.displayAddPage = async (req, res, next) =>{
    try {
        res.render('businessContact/add', {title: 'Add Games'})
    } catch (err) {
        console.error(err);
    }
}
module.exports.processAddPage = async (req, res, next) =>{
    let newContactList = new ContactList({
        "name": req.body.name,
        "username": req.body.username,
        "password": req.body.password,
        "email": req.body.email
    })

    try {
        await newContactList.save();
        res.redirect('/contact-list')
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
}
module.exports.displayEditPage = async (req, res, next) =>{
    let id = req.params.id;

    try{
        let contactListToEdit = await ContactList.findById(id);
        res.render('businessContact/edit', {title: 'Update Contact', contactList : contactListToEdit});
    } catch (err){
        console.log(err);
        res.status(500).send(err);
    }
}
module.exports.processEditPage = async (req, res, next) =>{
    let id = req.params.id;
    let updatedContactList = {
        "name": req.body.name,
        "username": req.body.username,
        "password": req.body.password,
        "email": req.body.email
    };
    try{
        await ContactList.updateOne({_id: id}, updatedContactList);
        res.redirect('/contact-list');
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
}
module.exports.performDeletion = async (req, res, next) =>{
    let id = req.params.id;

    try{
        await ContactList.findByIdAndRemove(id);
        res.redirect('/contact-list');
    } catch (err){
        console.log(err);
        res.status(500).send(err);
    }
}