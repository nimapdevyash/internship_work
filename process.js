
process.stdin.on('data',
	data => {
		console.log("you enterd : " , data.toString())
		process.exit(0)
	}
);
