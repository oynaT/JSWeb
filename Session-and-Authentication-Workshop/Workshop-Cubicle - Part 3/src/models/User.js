const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
});

//TODO: if this user already exists, throw error
//virtual property
userSchema.virtual("repeatPassword").set(function (value) {
    if (value !== this.password) {
     throw new mongoose.MongooseError("Passwort not match!");
    }   
});

const User = mongoose.model("User", userSchema);

module.exports = User;