//асинхронен код преобразуван на промис 
const jsonwebtoken = require("jsonwebtoken");
// const util = require('util'); 
// util.promisify
const { promisify } = require("util");

const jwt = {
  sign: promisify(jsonwebtoken.sign),
  verify: promisify(jsonwebtoken.verify),
};

module.exports = jwt;