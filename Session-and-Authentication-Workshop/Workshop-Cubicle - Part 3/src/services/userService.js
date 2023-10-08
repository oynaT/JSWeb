const User = require("./../models/User");

exports.register = async (username, password, repeatPassword) => {
   // const cube = new Cube(cubeData);
   // await cube.save();
   const user = await User.create(username, password);
   return user; //понякога го има като практика да го върнем към базата..
};
