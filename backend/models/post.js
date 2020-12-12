var mongoose = require('mongoose')
var Schema = mongoose.Schema

var postSchema = new Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    topics: {type: Array, required: true},
    topics_slugs: {type: Array, required: true},
    imageURL: {type: String, required: true},
    creation_date: {type: String, required: true},
    author_name: {type: String, required: true},
    author_id: {type: String, required: true},
})

module.exports = mongoose.model('Post', postSchema)