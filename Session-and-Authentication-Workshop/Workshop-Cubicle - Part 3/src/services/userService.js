const User = require("./../models/User");
const bcrypt = require("bcrypt");
//3 layer architecture 
//Controller -> service -> Domain Model
//в Controller или service -> правим валидация 
// по проста валидация може в контролера за по сложна валидация е добре да е service 

exports.register = async (userData) => {
   const user = await User.create(userData);
   return user;
};

exports.login = async (username, password) => {
   const user = await User.findOne({username});
   if(!user) {
    //validate user name
     throw new Error("Invalid username or password!");
   }
   //validate password
   const isValid = await bcrypt.compare(password, user.password);
   if(!isValid){
    throw new Error("Invalid username or password!");
   }

   return user;
};
 