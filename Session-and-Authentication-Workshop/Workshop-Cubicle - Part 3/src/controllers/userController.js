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

router.post('/login', async (req, res) =>{
    //find user
    const {username, password } = req.body; // деструкториране
    // console.log({logindata: req.body})
    const token = await userService.login(username, password);

    res.cookie("auth", token, { httpOnly: true });

    //когато се логнем на редиректнем към home
    res.redirect("/");
});

router.get("/logout", (req, res) => {
    res.clearCookie("auth");
    res.redirect("/");
  });

module.exports = router;