// internal implimentaion of functions 
let fun = new Function('paramerter1' , 'parameter2', `
        // function defination
        console.log("the parameters are :" , paramerter1 ,parameter2) ;
    `) ;

fun("first parameter" , " , " , "second parameter") ;

// currying (in this method we take the parameters sequentially rather than all at once)
function add(a) {
    return function(b) {
        return a+b ;
    }
}

console.log(add(5)(7)) ;