const router = require("express").Router();
const cubeService = require("../services/cubeService");

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
//document object -> include this two...
    //js object //additional functionalities

    console.log(cube);
    if(!cube) {
        res.redirect("/404");
        return;
    }
    res.render("cube/details", {...cube});
});

module.exports = router;