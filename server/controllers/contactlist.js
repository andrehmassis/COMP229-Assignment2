/* 
Student Name: Andre Henrique Moyses de Assis
Student number: 301282773
File: contactlist.js
Date: 2023-06-17
*/

let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// Create a reference to the Model
let ContactList = require('../models/contactlist');

module.exports.displayContactList = async (req, res, next) =>{
    try{
        let contactList = await ContactList.find();
        console.log(contactList)
        
        res.render('businessContact/contactlist', {
            title: 'Business Contact List', 
            ContactList : contactList,
            displayName: req.user ? req.user.displayName : ''});
    } catch (err) {
        console.error(err);
    }
};
module.exports.displayAddPage = async (req, res, next) =>{
    try {
        res.render('businessContact/add', {
            title: 'Add Contact',
            displayName: req.user ? req.user.displayName : ''});
    } catch (err) {
        console.error(err);
    }
};

module.exports.processAddPage = async (req, res, next) =>{
    let newContactList = new ContactList({
        "name": req.body.name,
        "username": req.body.username,
        "password": req.body.password,
        "email": req.body.email
    });

    try {
        await newContactList.save();
        res.redirect('/contact-list')
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
};

module.exports.displayEditPage = async (req, res, next) =>{
    let id = req.params.id;

    try{
        let contactListToEdit = await ContactList.findById(id);
        res.render('businessContact/edit', {
            title: 'Update Contact', 
            contactList : contactListToEdit,
            displayName: req.user ? req.user.displayName : ''});
    } catch (err){
        console.log(err);
        res.status(500).send(err);
    }
};

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
};

module.exports.performDelete = async (req, res, next) =>{
    let id = req.params.id;

    try{
        await ContactList.findByIdAndRemove(id);
        res.redirect('/contact-list');
    } catch (err){
        console.log(err);
        res.status(500).send(err);
    }
};