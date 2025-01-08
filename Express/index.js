import express from "express"

let app = express() ;

function midd ( req , res ,next) {
	console.log("hey yo") ;
	next("some error");
}

app.get("/" , midd,
	(req , res) => res.json({ 'message':"hello from testing"})) ;

function globalErrorHandler(err , req , res, next) {
	if(err) {
		console.log("handle krliya na !!!!   " , err);
	}
	next() ;
}

app.use(globalErrorHandler);

app.listen(8000,() => console.log("hello")) ;
