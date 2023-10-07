const mongoose = require("mongoose");

const cubeSchema = new mongoose.Schema({
    name: String,
    description: String,
    imageUrl: String,
    difficultyLevel: Number,

    // 1 куб с много аксесоари
    accessories:[
        {
        type: mongoose.Types.ObjectId, //type from mongo
        ref: "Accessory" // the name of the model
    },
    ],
    //1 куб към един акесоар 
    // accessory: {
    //     type: mongoose.Types.ObjectId, //type from mongo
    //     ref: "Accessory" // the name of the model
    // }
});

const Cube = mongoose.model("Cube", cubeSchema);


module.exports = Cube;

