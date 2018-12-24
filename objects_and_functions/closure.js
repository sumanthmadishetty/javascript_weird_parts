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