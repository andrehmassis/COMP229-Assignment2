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