// project to use async await for handling promises

async function fetchAJoke() {
  let data = await fetch("https://official-joke-api.appspot.com/random_joke");
  let joke = await data.json();
  console.log(joke);
}

fetchAJoke();
