//functions like setTimeOut uses closures

//for examplee


var anAsyncFunction = function(){
    var greeting = "Helloo"

    setTimeout(function() {
        console.log(greeting)
    },3000)
}


anAsyncFunction();

//when setTimeout is invoked then it waits for the interval to finish and later invokes the function that is passed as a prameter

//when setTimeout is invoked in the anAsyncFunction then it waits for 3 seconds to complete and 
//places an event in the event loop with the callback function specified
//so by the time the function passed to the setTimeoit function is invoked anAsync functions execution is completd and removed form
//execution stack so it fetches the variable greeting using closures