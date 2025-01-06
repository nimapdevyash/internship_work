let promise1 = new Promise((res, rej) => {
  setTimeout(() => {
    res("Promise is resolved");
  }, 2000);
});

let promise2 = new Promise((res, rej) => {
  setTimeout(() => {
    rej("Promise is rejected");
  }, 1000);
});

// promise.all() resolves and returnes an output only if all the promises resolve else it rejects.
Promise.all([promise1, promise2]).then((data) => {
  console.log("Promise.all : ");
  console.log(data);
}).catch((err) => console.log("Advice from CATCH : promise.all get's rejected even if one promise fails , so be sure to handle it"));

// promise.allSettled() returnes output of each promise even if it fails or not .
Promise.allSettled([promise1, promise2]).then((data) => {
  console.log("Promise.allSettled : ");
  console.log(data);
});

// promise.any() resolves if any promise resolves from it's parameters and rejects if all the promises are rejected
Promise.any([promise1 , promise2]).then((data) => {
    console.log("Promise.any : ") ;
    console.log(data) ;
})

// promise.race() resolves with the first promise that resolves but throws an error if any promise rejects first .
Promise.race([promise1 , promise2]).then((data) => {
    console.log("Promise.race : ") ;
    console.log(data) ;
}).catch((err) => console.log("Advice from CATCH : promise,race makes the promises race , the first one to resolve wins the race and if any other promise were to be rejected before that it throws an error , just like this one !"))

// you could use promise.try() method for promisisfication of a callback.
