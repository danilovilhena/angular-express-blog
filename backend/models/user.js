var mongoose = require('mongoose')
var bcrypt = require('bcrypt')
var Schema = mongoose.Schema

var userSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    phone: {type: String, required: true},
    creation_date: {type: String, required: true}
})

userSchema.statics.hashPassword = (password) => {
    return bcrypt.hashSync(password, 10)
}

userSchema.methods.isValid = (hashedPassword) => {
    return bcrypt.compareSync(hashedPassword, this.password)
}

module.exports = mongoose.model('User', userSchema)