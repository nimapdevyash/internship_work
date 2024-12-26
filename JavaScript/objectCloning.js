
let origianlObj = {
    'prop1' : "some random property",
    'prop2' : "some another ranodm property",
    'nested property' : {
        'nested prop1' : "some random nested property",
        'nested porp2' : "some another ranodm nested property"
    }
} ;

let clonedObj = {} ;

// ----------------------------------------- // 
//               shallow copy                //
// ----------------------------------------- // 

// for loop
// for(let key in origianlObj) {
//     clonedObj[key] = origianlObj[key] ;
// }


// assign
clonedObj = Object.assign(clonedObj , origianlObj) ;



console.log(origianlObj , "\n", clonedObj) ;

console.log("after editing original object.....")

origianlObj["nested property"]["nested prop1"] = "this property is edited for original object" ;

console.log(origianlObj , "\n", clonedObj) ;

