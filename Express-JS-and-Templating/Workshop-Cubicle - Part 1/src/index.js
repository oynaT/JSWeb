const express = require('express'); //импортираме експрес-а енд пойнт
const handlebars = require('express-handlebars'); //импортираме 
const path = require('path');

const app = express(); //викаме експрес функцията 
const PORT = 8080; //константа с порта

app.engine("hbs", handlebars.engine({extname: "hbs"})); //handlebars configuration
app.set("view engine", "hbs"); //сетваме view engin-a hdb на application-a 
app.set("views", "src/views"); // сетваме hdb към коя папка да бъде 

//setup static files - създава един абсолютен път по който да може. да се ориентира експрес базирано на релативните пътища които ние подаваме
const staticFiles = express.static(path.resolve(__dirname, "public"));
app.use(staticFiles);

app.get("/", (req, res) =>{
    //res.send('Hello from express server');
    res.render("index");
})

app.listen(PORT, () => console.log(`Servers is running on port ${PORT}...`)); //логваме да виждаме кога работи сървъра