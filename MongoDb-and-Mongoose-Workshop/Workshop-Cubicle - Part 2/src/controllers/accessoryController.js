const router = require("express").Router();
const cubeService = require("../services/cubeService");

router.get('/create', (req, res) => {

    res.render("accessory/create");
});


module.exports = router;