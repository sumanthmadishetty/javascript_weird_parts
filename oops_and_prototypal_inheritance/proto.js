//Every objct has a prototype object that it inherits

var paren = {
    first_name: "ASD",
    last_name: "BSD",
    full_name: function() { return first_name + last_name }
}


var child = {
    first_name: "ADSDSDA",
    last_name: "JFIOFHOID"
}


//following is not the optimu way to achieve inhertance

child.__proto__ = person;

// we are specifying that child is inherited from person

console.log(child.full_name()) //pritns full name


//First JS engine searches for fullname method in child object and later it searches for the same in parent as specified