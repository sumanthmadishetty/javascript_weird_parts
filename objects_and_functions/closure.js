//closure

//garbage collection


//closure is a phenomenon/ future of javascript in which the JS Engine will still have access to the variables of
// function whose execution is complete and removed from the execution stack
//For example

function sayHi(name) {
    return function printHi(last_name) {
        console.log(name+ ' '+last_name)
    }
}
 sayHi('summu')('maddy') //It print summu maddy

 var asd = sayHi('poi')
 asd('asd') //prints poi asd in the console
 //According to JS when a functioon is executed then a execution context is created and placed in execution stack
 //after the function is executed completely then the execution context is deleted and the execution of other functions go on

//Now according to above specified first var asd will hold the ref to the function sayHi('poi)
//when sayHi is invoked then it returns the function printHi and later the execution context will be deleted
//and when asd('asd) is invoked then the JS engine will find the reference to the string 'poi' that is passed as a
//  parameter to the function sayHi, whose excution context is deleted.
//THis phenomenon of finding the ref to the variables whoses executin conext is deleted is knows as "CLOSURE"


function buildFunctions () {
    arr=[]
    for(var i=0; i<3;i++) {
        arr.push( function(){
            console.log(i)
        })
        return arr
    }

    a = buildFunctions()
    a[0]() //think prints 0 but prints 3
    a[1]() //think prints 1 but prints 3
    a[3]() //think prints 2 but prints 3
}

//3 functions prints the same value 3 because the for loop in the function returns 3 functions with console.log(i)
//and when we execute the each functiom of that array while printing to console it refers to 








//Variables that are created on closur3e are known as free variables


//to use closures for our advantage write functions ike this

function buildfunc2() {
    var a=[]
    for(var i=0;i<4;i++) {
        a.push(function(j){
            return function() {
                console.log(j)
            }
        })
    }
    return a
}

var fs = buildfunc2()

fs[0](); //prints 1
fs[1](); //prints 2
fs[2](); //prints 3