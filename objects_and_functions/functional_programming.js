var arr1=[1,2,3,4,5]

function mapForEach(arr, fn) {
    var arr2 = [];
    for(var i =0; i< arr.length;i++) {
        arr2.push(fn(arr[i]))
    }
    return arr2;
}

var checkLimiter = function(limiter) {
    debugger
    return function(limiter,item) {
        return limiter > item
    }.bind(this,limiter)
}

//Here check limiter returns a function likeee...
// function(limiter=limiter_that_is _pased, item){
//     return limiter > item
// }

//BIND makes a copy of function with this as passed and the argument limiter pre defined to the value that is passed
console.log(mapForEach(arr1, checkLimiter(3))) //prints true,true,false,false,flase

function getSelectedOptions(sel) {
    var opts = [],
      opt;
    var len = sel.options.length;
    for (var i = 0; i < len; i++) {
      opt = sel.options[i];
  
      if (opt.selected) {
        opts.push(opt);
      }
    }
  
    return opts;
  }