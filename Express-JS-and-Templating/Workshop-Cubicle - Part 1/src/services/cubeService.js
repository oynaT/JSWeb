 
 const uniqid = require("uniqid");
 
 const cubes = [];

//exports.create = (name, description, imageUrl, difficultyLevel) => {

    exports.create = (cubeData) => {
    const id = uniqid();
    const newCube = {
        id,
        ...cubeData,
        // name, 
        // description, 
        // imageUrl, 
        // difficultyLevel,
    };
    cubes.push(newCube);
    return newCube;
};

 exports.getAll = () => {
    return [...cubes];
 }