// The file demonstrates types in Javascript.

// null is a type
var y = null;
console.log(y); // null

// console.log(x); //  prints undefined in browser, throws an error in compiler

// An array is considered type object.
var fruits = ['Watermelon', 'Starfruit', 'Dragonfruit'];
console.log(typeof (fruits)); // Object

// You can concaternate number with a string to form a string.
var x = 1;
var y = x + "yes";
console.log("(x + yes) is type " + typeof (y) + ", the content is: " + y); // (x + yes) is type string, the content is: 1yes

// You can also mix different types together in an array.
var person = [
    20,
    false,
    30,
    function () {
        console.log("Yes, I'm underaged, please refrain from flirting with me.");
    }
]
console.log('\nPerson:  ');
console.log('=======');

console.log("Age: " + person[0]);
console.log("Is he okay? " + person[1]);
person[3](); // You can also call functions from inside of arrays.

console.log('=======');


// You can even sort arrays of different object types...
person.sort();
console.log(person);


(function () {
    console.log("IIFE!")
})();