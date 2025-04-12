
function* generator() {
	yield 1 ;
	yield* subGenerator() ;
	yield* [ "jalwa hai hamara yaha" , "oolala la"];
	yield 2 ;
}

function* subGenerator() {
	console.log("flow is here now") ;
	yield "dhum" ;
	yield "dhum2" ;
	yield "dhum3" ;
}

let genObj = generator() ;

let val = genObj.next() ;
console.log(val) ;

let val2 = genObj.next() ;
console.log(val2) ;

//for(let val of generator())
//	console.log(val)
