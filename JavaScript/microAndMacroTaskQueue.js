
console.log("stating the game...") ;

setTimeout(() => {
    console.log("time out resolved...") ;
}, 0);

Promise.resolve().then(() => console.log("promised resolved...")) ;

console.log("ending the game...") ;

// NOTE: the promised was resolved first even though the timeout was first for execution
// these phenomena was caused by the heigher priority of microtask queue whcih hanles the promise
// than the macrotask queue which handles the asynchronus tasks of setTimeout and setInterval .