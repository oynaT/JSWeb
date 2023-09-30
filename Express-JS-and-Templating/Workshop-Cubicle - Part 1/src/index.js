const express = require('express'); //регистрираме експрес-а енд пойнт
const app = express(); //викаме експрес функцията 
const PORT = 8080; //константа с порта

app.get('/', (req, res) =>{
    res.send('Hello from express server');
})

app.listen(PORT, ()=> console.log('Servers is running on port ${PORT}...')); //логваме да виждаме кога работи сървъра