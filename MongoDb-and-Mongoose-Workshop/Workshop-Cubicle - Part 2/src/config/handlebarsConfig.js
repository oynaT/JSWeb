const handlebars = require('express-handlebars'); //импортираме 

const handlebarsConfig = (app) => {
    app.engine("hbs", handlebars.engine({extname: "hbs"})); //handlebars configuration
    app.set("view engine", "hbs"); //сетваме view engin-a hdb на application-a 
    app.set("views", "src/views"); // сетваме hdb към коя папка да бъде 
    
}
module.exports = handlebarsConfig;