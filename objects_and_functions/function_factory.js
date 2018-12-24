//FUcntion factory

function greet(language) {
    return function(first_name,last_name) {
        if(language === 'es') {
            console.log("hola"+first_name+last_name)
        }
        if(language === 'en') {
            console.log("hello"+first_name+last_name)
            
        }
    }
}

var greetEnglish = greet('en');
var greetSpanish = greet('es');

greetEnglish('asd','qwe');
greetSpanish('asd','qwe');