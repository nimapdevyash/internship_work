
// an effie to fetch and show the joke , this project is created to complete the task on the NTTS
// task : Create a basic project to demonstrate Promise chaining 

(function getJoke() {
    
    fetch('https://official-joke-api.appspot.com/random_joke')
    .then(response => response.json()) 
    .then(data => {
            let setup  = data.setup ;
            let punchline  = data.punchline ;
            console.log("Here's a Joke for you") ;
            console.log("setup : " , setup) ;
            console.log("punchline : " , punchline) ;

        return 0 ;
    })
    .catch(err => console.log("error occured while fetching a joke : " , err)) ;

})() ;