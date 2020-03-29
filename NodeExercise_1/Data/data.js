const mongoose = require('mongoose');

const Content = new mongoose.Schema({
    firstName: {type: String, required:true},
    lastName: {type: String, required:true}
});

module.exports = mongoose.model('Data', Content);

//this page is for schema of our table
