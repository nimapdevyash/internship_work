
let handler = {
	get : (obj , property) => {
		console.log(obj , " is trying to access " , property) ;
		return obj[property] ;
	},
	set : (obj , property , value) => {
		console.log(obj , " is tryig to set " , property , " with value " , value);
		obj[property] = value ;
		return true ;
	}
}


let proxyObject = new Proxy({} , handler) ;


proxyObject.name = "yash" ;
console.log(proxyObject.name );


