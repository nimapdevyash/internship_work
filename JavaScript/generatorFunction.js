
function* generator() {
	console.log("executed in first next call");

	let stop1 = yield "enter some value"; // Pauses and yields message
	console.log("stop 1:", stop1);
	console.log("last value is assigned to the stop1 and now we are moving to the stop2");

	let stop2 = yield "enter value to assign it to the stop2"; // Pauses again
	console.log("stop 2:", stop2);
	console.log("now the stop2 has been assigned a value and we are moving forward");

	// NOTE: this yield won't pause the execution here and yield some value but rather would take the execution to the function subGenerator and would keep on executing it untill it finds the first yield and then yield that value, and from then on it start behaving like normal generator function.
	yield* subGenerator(); // Delegates to subGenerator
}

function* subGenerator() {
	console.log("inside the subGenerator and in first next phase");
	yield "inside the subGenerator"; // Pauses and yields
}

// Generate the generator object
let genObj = generator();

// Starts the generator, runs until first yield
console.log(genObj.next()); // → { value: "enter some value", done: false }

// Assigns 1 to stop1 and proceeds to next yield
console.log(genObj.next(1)); // → { value: "enter value to assign it to the stop2", done: false }

// Assigns 2 to stop2 and enters subGenerator
console.log(genObj.next(2)); // → { value: "inside the subGenerator", done: false }

// Completes subGenerator and main generator
console.log(genObj.next()); // → { value: undefined, done: true }


