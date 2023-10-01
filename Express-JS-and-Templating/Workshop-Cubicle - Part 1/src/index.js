//Imports
const express = require('express'); //импортираме експрес-а енд пойнт
const handlebarsConfig = require('./config/handlebarsConfig');
const expressConfig = require('./config/expressConfig');
 

//Local variables
const app = express(); //викаме експрес функцията
const PORT = 8080; //константа с порта

//configurations
handlebarsConfig(app);
expressConfig(app);

app.get("/", (req, res) =>{
    //res.send('Hello from express server');
    res.render("index");
})

app.listen(PORT, () => console.log(`Servers is running on port ${PORT}...`)); //логваме да виждаме кога работи сървъра