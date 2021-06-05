const mongoose = require('mongoose'), Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: String, 
    email: String,  
    age: Number,
    prograd_id: Number,
    squad: Number
})

const User = mongoose.model("user", UserSchema)


module.exports = { User };