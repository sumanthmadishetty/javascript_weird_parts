//Immediately invoked functions expressions

var normal_func = function(name) {
    console.log("hello"+ name)
}
// normal function will not print unless we invoke it specifically using normal_func();
// IIFE will get excecuted on the fly
var iife_func = function(name) {
    console.log("hello " + name) //prints hello undefined
}();


var greeting = function(name) {
    return "Good Morning " + name
}('Name');

console.log(greeting); //prints Good Morning Name greeting which is a IIFE gets invoked on the fly and which returns the string
                      // so the string gets stored into the variable greeting
//console.log(greeting()); --> it throws an error as during execution the greeting varable gets a strig stored into it and hence cannot invoke it as a funcion

// function(name) {
//     console.log('Helloooooo')
// } //It throws an error as the JS engine will not allow functions like that so if we need to create and execute
    //functions on the fly with out assigining it to any value you can do like describe below

(function(){
    console.log("HURRAYYYYYYY....!, Its an IIFE")
}()); //Most of the frameworks use this kind of functions