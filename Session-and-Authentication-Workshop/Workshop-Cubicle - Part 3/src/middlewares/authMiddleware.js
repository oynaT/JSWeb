const jwt = require('../lib/jwt');
const { SECRET } = require("../constants");


//функция която всеки път ще валидира JWT 
exports.auth = async (req, res, next) => {
    const token = req.cookies['auth'];
    //console.log({token});

if(token){
    try {
        const decodedToken = await jwt.verify(token, SECRET);
        req.user = decodedToken;
        res.locals.user = decodedToken;
        res.locals.isAuthenticated = true;
        
        next();
    } catch (error) {
        console.log({error});
        res.cookieClear("auth");
        res.redirect("/users/login");
    }
}else{
    next();
}
};


//блокираме урл-ите за достъпа до контролерите ако не сме логнати да го достъпваме ръчно през адреса
//Guard Clouse 
exports.isAuth = (req, res, next) => {
    if (!req.user) {
      return res.redirect("/users/login");
    }
  
    next();
  };
