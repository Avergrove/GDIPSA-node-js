// A javascript that demonstrates working with Express library, please install it through NPM first.

// Import express library
const express = require('express');

// Instantiation
var app = express();

app.get('/', function(req, res){
    res.send('<div style="color: #885500; font-size: 350px">HI MOM!</div>'); 
});

app.listen(1337, function(){
    console.log("Server is running on localhost/1337 test");
})