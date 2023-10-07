//Imports
const express = require('express'); //импортираме експрес-а енд пойнт
const handlebarsConfig = require('./config/handlebarsConfig');
const expressConfig = require('./config/expressConfig');
const routes = require('./router');
const dbConnect = require('./config/dbConfig');

//Local variables
const app = express(); //викаме експрес функцията
const PORT = 8080; //константа с порта


dbConnect()
.then(() => console.log(`Successfully connect to the DB!`))
.catch((err) => console.log(`Error while connecting in DB: ${err}`));


//configurations
handlebarsConfig(app);
expressConfig(app);

//Routing
app.use(routes);

app.listen(PORT, () => console.log(`Servers is running on port ${PORT}...`)); //логваме да виждаме кога работи сървъра