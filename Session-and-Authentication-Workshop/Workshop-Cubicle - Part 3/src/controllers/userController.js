const router = require("express").Router();
const userService = require("../services/userService");

router.get('/register', (req, res) =>{
    res.render("user/register");
});

router.post("/register", async (req, res) => {
    console.log({inputData: req.body});
    const {username, password, repeatPassword } = req.body; // деструкториране

    await userService.register({
        username, 
        password,
        repeatPassword
   });
   res.redirect('/users/login');
});

router.get('/login', (req, res) =>{
    res.render("user/login");
});


// router.get('/logout', (req, res) =>{
//     res.render("user/logout");
// });

module.exports = router;