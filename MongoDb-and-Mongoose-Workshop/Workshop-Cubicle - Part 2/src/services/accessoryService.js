const Accessory = require("./../models/Accessory");

 exports.create = async (accessoryData) => {
    const accessory = await Accessory.create(accessoryData);
    return accessory; //понякога го има като практика да го върнем към базата..
};


//взимаме всички аксесоари -> викаме ги там където са атачмантите
exports.getAll = () => Accessory.find();

exports.getWithoutOwned = (accessoryIds) => {
  // $nin => NOT IN
  return Accessory.find({ _id: { $nin: accessoryIds } });
};