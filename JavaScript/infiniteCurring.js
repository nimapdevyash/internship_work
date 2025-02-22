

// the idea is simple if we have b then that means to continue the currying , so we returnt the fun itself with the input of a+b .
// note that all we are doing is initializing the outer function from inner function like at the start of it's call (the first step);
function fun(a){
	return function fun2(b) {

		// if there is no parameter passed to the second function then we need to stop the currying and return the ans
		if(b) {
			// if b is passed then we need to continue the currying ,
			// essentially what we are doing here is calling the outer function with the sum of the two , 
			// we are accumulating the sums of previous curring calls and then giving it input to the fun 
			return fun(a+b);
		}
		// now if we don't have b then that means we need to return the ans , and notice that in last recursive call we had passed the sum of all the nums till this point to this fun 
		// hence this a is essentially (a+b) or could say 1+2+...n up to this point all togather
		return a ;
	}
}

console.log(fun(1)(2)(3)(4)(5)()) ;
