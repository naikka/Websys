const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    purok: String,
    name: String,
    position: String,
});

const userModel = mongoose.model("official", UserSchema); 
module.exports = userModel;
