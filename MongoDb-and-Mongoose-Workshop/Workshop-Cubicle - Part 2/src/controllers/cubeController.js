const router = require("express").Router();
const cubeService = require("../services/cubeService");
const accessoryService = require("../services/accessoryService");

router.get("/create", (req, res) => {
    //console.log(cubeService.getAll());
    res.render("cube/create");
});

router.post("/create", async (req, res) => {
    //console.log(req.body);
    const {name, description, imageUrl, difficultyLevel} = req.body;

    await cubeService.create({
        name, 
        description,
        imageUrl, 
        difficultyLevel: Number(difficultyLevel),
   });
    res.redirect('/');
});

router.get("/:cubeId/details", async (req, res) => {
    const {cubeId} = req.params;
    const cube = await cubeService.getSingleCube(cubeId).lean();
    //for lean() //document object -> include this two...
        //js object //additional functionalities

    console.log(cube);
    if(!cube) {
        res.redirect("/404");
        return;
    }
    res.render("cube/details", {...cube});
});

//Accessry attachement
router.get("/:cubeId/attach-accessory", async (req, res) => {
    const {cubeId} = req.params;
    const cube = await cubeService.getSingleCube(cubeId).lean();
    //console.log(req.params.cubeId);  
    
    const accessories = await accessoryService.getAll().lean();
    const hasAccessories = accessories.length > 0;

    res.render('accessory/attach' , { cube,accessories, hasAccessories });
});


//attach method
router.post("/:cubeId/attach-accessory", async (req, res) => {
    const {cubeId} = req.params;
    // console.log(req.cubeId);  
    // console.log(req.body); 
    const { accssory: accessoryId } = req.body;
    await cubeService.attachAccessory(cubeId , accessoryId);

    res.redirect(`/cubes/${cubeId}/details`);
});

module.exports = router;