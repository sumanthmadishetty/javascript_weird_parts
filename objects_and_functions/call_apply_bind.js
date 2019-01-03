var person = {
    first_name: 'SUMANTH',
    last_name: 'Madishetty',
    getFullName: function(){
        return this.first_name + " " + this.last_name
    }
}


var LogName = function(lang1,lang2) {
    console.log('hello' + this.getFullName())
    console.log(lang1 + lang2)
}
 //This throws an error if called directly by using below notation

// LogName();
//IT throws an error because this in the Logname refers to global object and we donot have any getfullname function at the global level


var Logger = LogName.bind(person)

Logger() //this prints hello sumanth madishetty

//Bind function binds the parameter we passed as this so in the above example we are passing person for the bind funcion so 
//in that scenario this refers to person and this.getFullName referes to getFullName function in the person objkect
//Bind makes a copy of the function and assigns makes the parameter we passed as this

//Call:-

    LogName.call(person, en, es)
//if use the call method then it call the function and it binds the first parameter passeed as this


//Apply:-

LogName.apply(person, ['es', 'en'])

//apply do the same as call but it expects the parameter passed to the function as an array


//fucntionBorrowing


var person2 = {first_name: 'asd', last_name: 'asdasdasd'}

console.log(person.getFullName.bind(person2))  //pereson2 donot have getfullname function bu we can use the pereson variabels functionlike specified below



//functionCurrying

function multiply(a,b) {
    return a*b
}


var multiplyByTwo = multiply.bind(this,2) //this makes a copy of the function multiply with makes a=2


console.log(multiplyByTwo(4)) //prints 8
