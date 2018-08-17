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
// Not so noticeable on "small" files
/*
var fs = require("fs");
var data = fs.readFileSync('example.txt');

console.log(data.toString());
console.log("Synchronous program ended");

// Asynchronous, does things in background and callsback when complete.
var fs = require("fs");
*/

var fs = require("fs");

console.log("Running asynchroous file read");
fs.readFile('../Resources/example.txt', function (err, data) {
    if (err) return console.error(err);
    else {
        let $text = data.toString();
        let $results = [];

        let lines = $text.split('\n');
        let lineNumber = 1;
        lines.forEach(function (line, idx) {
            // Print the lines
            console.log(lineNumber + ": " + line);
            lineNumber++;

            // Count characters, cause its fun!
            for(var i = 0; i < line.length; i++){
                if(!$results[line[i]]){
                    $results[line[i]] = 0;
                }

                $results[line[i]]++;
            }

        })

        console.log("\nPrinting character results");
        console.log($results);


    }
})

console.log("Continuing to run..");
console.log("Program ended");
