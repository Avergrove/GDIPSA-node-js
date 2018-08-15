var Person = {
    first_name: 'Kenneth',
    last_name: 'Phang'
}

console.log(Person);
Person.Salary = 2000;
console.log(Person);
delete(Person.Salary);
console.log(Person);

// Defining a class
class Person4{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    getFirstName(){
        return this.firstName;
    }
};

// Inheritance

///////////////////////////////////////////////
//                                           //
//  ||====|   // \\   ======                 //
//  ||   \|  ||   ||    ||                   //
//  ||       ||===||    ||                   //
//  ||   /|  ||   ||    ||                   //
//  ||====|  ||   ||    ||                   //
//                                           //
//                                           ////////////////////////
//                                                                 //
//           ||  ||  ||  ||   ||  | ===  ||     ||===              //
//           ||  ||  ||  ||   ||  ||  || ||     ||   \\            //
//           ||  ||  ||  ||   ||  ||==   ||     ||    ||           //
//           ||_ || _||  ||   ||  || \\  ||     ||   //            //
//            \_/  \_/    \\__//  ||  \\  |==== ||===              //
//                                                                 //
/////////////////////////////////////////////////////////////////////