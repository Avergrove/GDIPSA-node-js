// The file demonstrates function passing features, such as closure.

function incrementByOne(value){
    let value2 = value;
    return function(){
        console.log(value2 + 1);
    }
}

var t = incrementByOne(4);
t(); // A way to execute functions from the inside... on the outside.