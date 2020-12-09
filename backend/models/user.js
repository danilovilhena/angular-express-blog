var mongoose = require('mongoose')
var bcrypt = require('bcrypt')
var Schema = mongoose.Schema

var userSchema = new Schema({
    // Required fields
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    phone: {type: String, required: true},
    creation_date: {type: String, required: true},
    // Non required field
    description: {type: String, required: false},
    linkedin: {type: String, required: false},
    instagram: {type: String, required: false},
    github: {type: String, required: false},
    site: {type: String, required: false},
})

userSchema.statics.hashPassword = function hashPassword(password){
    return bcrypt.hashSync(password,10);
}

userSchema.methods.isValid = function(hashedpassword){
    return bcrypt.compareSync(hashedpassword, this.password);
}

module.exports = mongoose.model('User', userSchema)