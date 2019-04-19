//Arrays are nothing but objects with index being the key like for example

const newArr = ['ek', 'dho', 'theen'];


for(var prop in newArr) {
    console.log(prop, newArr[prop])
}

//It retuurns {
    // 0: 'ek',
    // 1: 'dho',
    // 2: 'theen'
// }

//If we add any prototype to an array then it would be stored in aray and eevery array as a property

//Ex

Array.prototype.myFunc = "Cool";

//And if you call the above for loop you will get 4 properties with the last prop being myFunc: "Cool"

//for this reason DONT USE FOR..IN to iterate over array as it also iterates through its prototypesasqq

//Now if you console log the new array with index it gives like


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////OBJECT.CREATEEEE////////////////////////////////////////////////////////////////////////////

// there are many kinds of crating an object of of the type is to use Object.create


const obj = {
    firstName: "First name",
    lastName: "LastName",
    greet: function() {
        return this.firstName + this.lastName
    }
}

//Now if we want to create a new Obect with all the prop of obj object we can do
 const newObj = Object.create(obj)

//  And if you console log the new obj you will find that object.create has created a new object with its prototype being the obj object that was defined AnimationPlaybackEvent

//  and if you call

 console.log(newObj.greet()) //Itt prints First name LastNameee

//  And you can add a prop to it so that it will use that prop itself like you can add newObj.firstName  = "Summu" and again call the greet
//  function then it will print summu lastname