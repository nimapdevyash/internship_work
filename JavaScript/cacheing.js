function cacher(fun) {
	let cache = new Map() ;
	return function(...args) {
		if(cache.has(args)) {
			return cache.get(args) ;
		}else{
			let result = fun(...args) ;
			cache.set(args,result);
			return result ;
		}
	}
}

function sum(...args) {
	return args.reduce((sum , val) => sum += val , 0);
}

let cachedFun = cacher(sum) ;

console.time() ;
console.log(cachedFun(1,2,3,4,5)) ;
console.timeEnd() ;

console.time() ;
console.log(cachedFun(1,2,3,4,5)) ;
console.timeEnd() ;
