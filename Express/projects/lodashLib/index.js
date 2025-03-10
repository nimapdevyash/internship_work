const express = require("express") ;
const _ = require("lodash") ;

const app = express() ;

let arr = [1,2,3,4,5,6,7,8] ;

// ###################### ARRAY ######################

// devides the array into the chunks of 5
let chunks = _.chunk(arr , 5) ;
console.log(chunks) ;

arr = [false , 0 , null , 1 , 2 , null , NaN , undefined , "" , "hello"]

// removes all falsy values from the array
let compacted = _.compact(arr) ;
console.log(compacted) ;

// returns the values that are considered different according to the comparator
// so the idea is to run that Math.floor function on both of the arrays and then compare those changed arrays and return the original elements whos counterparts doesn't exists in the second array
let diff = _.differenceBy(arr , [0 , 1 , 3] , Math.floor) ;
console.log(diff) ;

// drops elements from right until fun returns false
let vals = _.dropRightWhile(arr , (val , index , arr) => index >= 5) ;
console.log(vals) ;


app.get('/' ,(req , res) => res.send("kay re kasa aahes")) ;
app.listen(3000 , () => console.log("app is live")) ;
