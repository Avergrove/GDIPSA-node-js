// A javascript that demonstrates working with Express library, please install it through NPM first.

// Import express library
const express = require('express');

// Instantiation
var app = express();

app.listen(1337, function(){
    console.log("Server is running on localhost/1337");
})