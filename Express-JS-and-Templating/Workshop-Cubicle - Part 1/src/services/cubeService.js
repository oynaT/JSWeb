 
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
        id: '62209f8ln7sc0rt',
        name: 'Cube 2',
        description: 'test 2',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMRS4ZW4gPHEn-zNHpIyfTRMs4qhXJGjoRR4gcsMR3Aw&s',
        difficultyLevel: 2
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

 exports.getAll = () => {
    return [...cubes];
 }