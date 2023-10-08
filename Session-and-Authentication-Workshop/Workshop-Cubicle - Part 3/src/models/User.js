const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

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
userSchema.pre('save', async function() {
    //this password                word         , salh routs
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;

});

const User = mongoose.model("User", userSchema);

module.exports = User;