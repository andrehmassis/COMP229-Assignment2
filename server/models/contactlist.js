/* 
Student Name: Andre Henrique Moyses de Assis
Student number: 301282773
File: contatlist.js
Date: 2023-06-17
*/

let mongoose = require('mongoose');


//create a contact model class
let contactModel = mongoose.Schema({
    name: String,
    username: String,
    password: String,
    email: String
},
{
    collection: 'contactlist'
});

module.exports = mongoose.model('ContactList', contactModel);