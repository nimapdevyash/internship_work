import express from "express" ;

const app = express() ;

app.use(express.json()) ;

let count = 0 ;

app.get('/', (req , res) => {
	throw new Error("some random error at home controller") ;
	console.log("controller called : " + count);
	res.send("response from controller");
})

app.use((err, req , res , next) => {
	console.log("error handled with global error handler : " + count) ;
	res.send("response from global error handler middleware : " + ++count);
})

app.listen(3000 , () => {
	console.log("app is listening....");
})
