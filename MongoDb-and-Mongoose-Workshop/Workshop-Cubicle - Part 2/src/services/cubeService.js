 
 const Cube = require("./../models/Cube");
 const cubes = [];

 exports.create = async (cubeData) => {
    // const cube = new Cube(cubeData);
    // await cube.save();

    const cube = await Cube.create(cubeData);
    return cube; //понякога го има като практика да го върнем към базата..
};

 exports.getAll = async(search, from, to) => {
 //let filterCubes = [...cubes]; //LET
 let filterCubes = await Cube.find().lean(); //LET

 //TODO: filter this with mongoose - query
  if(search){
    filterCubes = filterCubes.filter((cube) => 
    cube.name.toLowerCase().includes(search.toLowerCase())
    );
  }
  if(from){
    filterCubes = filterCubes.filter(
      (cube) => cube.difficultyLevel >= Number(from));
  }
  if(to){
    filterCubes = filterCubes.filter(
      (cube) => cube.difficultyLevel <= Number(to));
  }
    return filterCubes;
 };

 exports.getSingleCube = (id) => {
  return Cube.findById(id);
 }