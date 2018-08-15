var x = 1;  // Global variable


function make(closure){
    
    let x = 2;
    console.log("(var x = 1) Let x = 2: " + x);
    closure();
}

function closure(){
    console.log("Running closure method!");
}

make(closure);