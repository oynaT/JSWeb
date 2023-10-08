const User = require("./../models/User");
//3 layer architecture 
//Controller -> service -> Domain Model
//в Controller или service -> правим валидация 
// по проста валидация може в контролера за по сложна валидация е добре да е service 

exports.register = async (userData) => {
   const user = await User.create(userData);
   return user;
};
