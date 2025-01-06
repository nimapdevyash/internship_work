function functionToPromisify(num1, num2, callBack) {
  if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
    callBack(new Error("Both the Parameters should be valid numbers !"));
  } else
    setTimeout(() => {
      callBack(null, num1 + num2);
    }, 2000);
}

function promisify(func) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      func(...args, (err, res) => {
        if (err) {
          console.log("promise rejected");
          reject(err);
        } else {
          console.log("promise resolved");
          resolve(res);
        }
      });
    });
  };
}

let promisified = promisify(functionToPromisify);

promisified("a", 7)
  .then((res) => console.log(res))
  .catch((err) => console.log("err : ", err));
