// !!! An important Javascript concept !!!
// Callback is a way to call another method when a method is complete.

/*
function main(){
    readFile(callback);
}

function readFile(callback){
    console.log("Completed reading file!");
    callback();
}

function callback(){
    console.log("Calling back.");
}

main();
*/

// Synchronous, AKA, waits.
var fs = require("fs");
var data = fs.readFileSync('example.txt');

console.log(data.toString());
console.log("Synchronous program ended");

// Asynchronous, does things in background and callsback when complete.
var fs = require("fs");

console.log("Running asynchroous file read");
fs.readFile('example.txt', function(err, data){
    if (err) return console.error(err);
    else console.log(data.toString());
})

console.log("Continuing to run..");
console.log("Program ended");
