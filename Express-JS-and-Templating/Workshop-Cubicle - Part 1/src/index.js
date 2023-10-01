const express = require('express'); //импортираме експрес-а енд пойнт
const handlebars = require('express-handlebars'); //импортираме 

const app = express(); //викаме експрес функцията 

app.engine("hdb", handlebars.engine({extname: "hdb"})); //handlebars configuration
app.set("view engine", "hdb"); //сетваме view engin-a hdb на application-a 
app.set("views", "src/views"); // сетваме hdb към коя папка да бъде 

const PORT = 8080; //константа с порта

app.get("/", (req, res) =>{
    //res.send('Hello from express server');
    res.render("index");
})

app.listen(PORT, () => console.log(`Servers is running on port ${PORT}...`)); //логваме да виждаме кога работи сървъра