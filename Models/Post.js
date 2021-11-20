const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    nom : { type : String, require: true},
    message : { type : String, require: true}
})

module.exports = mongoose.model('Post', postSchema)