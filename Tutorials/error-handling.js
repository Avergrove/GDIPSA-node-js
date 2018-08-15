function a(){
    throw new Error("Something bad happened!");
}

try{
    a();
}

catch(e){
    console.log("I caught an err: " + e.message);
}
finally{
    //then perish
    console.log("yes theres finally");
}

console.log("Program is still running.");