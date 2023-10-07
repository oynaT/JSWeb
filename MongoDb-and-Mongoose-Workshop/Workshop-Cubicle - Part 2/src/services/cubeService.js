 
 const uniqid = require("uniqid");
 
 const cubes = [
    {
        id: '62209f8ln7sc0rt',
        name: 'Cube 1',
        description: 'test',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMRS4ZW4gPHEn-zNHpIyfTRMs4qhXJGjoRR4gcsMR3Aw&s',
        difficultyLevel: 1
      },
      {
        id: '62209f8ln7sc',
        name: 'Cube 2',
        description: 'test 2',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMRS4ZW4gPHEn-zNHpIyfTRMs4qhXJGjoRR4gcsMR3Aw&s',
        difficultyLevel: 2
      },
      {
        id: '62209f8lc',
        name: 'Cube 3',
        description: 'test 3',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMRS4ZW4gPHEn-zNHpIyfTRMs4qhXJGjoRR4gcsMR3Aw&s',
        difficultyLevel: 3
      }

 ];

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

 exports.getAll = (search, from, to) => {

 let filterCubes = [...cubes]; //LET
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
    return cubes.find((cube) => cube.id === id);
 }