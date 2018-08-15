// To import, use require
var Exports = require('./exports');
// You can import methods..
Exports.tester();

// You can also import classes.
var person = new Exports.Person('yes','yes', 21);
console.log(person);