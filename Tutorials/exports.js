// To export, use module.exports.
module.exports.tester = function(){
    console.log('"tester" in exports.js is called');
}

// You can also export classes.
module.exports.Person = class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    getFirstName(){
        return this.firstName;
    }
};;