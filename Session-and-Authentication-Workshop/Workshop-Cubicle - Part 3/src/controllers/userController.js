const router = require("express").Router();
//const userService = require("../services/userService");

router.get('/register', (req, res) =>{
    res.render("user/register");
});

module.exports = router;