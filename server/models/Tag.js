// define schema here
const {model, Schema} = require('mongoose');
const tagSchema = new Schema({
    name: String,
    description: String
});

module.exports = model('User', tagSchema)