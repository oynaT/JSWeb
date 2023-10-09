const express = require('express'); //импортираме експрес-а енд пойнт
const path = require("path");
const cookieParser = require("cookie-parser");

const expressConfig = (app) => {
    //setup static files - създава един абсолютен път по който да може. да се ориентира експрес базирано на релативните пътища които ние подаваме
    const staticFiles = express.static(path.resolve(__dirname, "../public"));
    //app.use(staticFiles);
    app.use(express.static(path.resolve(__dirname, "../public")));
    app.use(express.urlencoded({extended: false})); //body parser /url encoded
    app.use(cookieParser());
}

module.exports = expressConfig;