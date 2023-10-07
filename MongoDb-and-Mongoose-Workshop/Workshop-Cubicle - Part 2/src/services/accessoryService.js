const Accessory = require("./../models/Accessory");

 exports.create = async (accessoryData) => {
    const accessory = await Accessory.create(accessoryData);
    return accessory; //понякога го има като практика да го върнем към базата..
};