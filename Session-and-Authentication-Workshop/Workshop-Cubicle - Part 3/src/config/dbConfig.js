const mongoose = require("mongoose");
const URL = "mongodb://127.0.0.1:27017/cubical2023"; //Connection String

async function dbConnect() {
    await mongoose.connect(URL);
}

module.exports = dbConnect;