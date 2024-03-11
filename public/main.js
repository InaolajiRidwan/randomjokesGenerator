const quote_container = document.getElementById("quote-container");

const btn = document.getElementById("btnjoke");
const url =
  "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

const getJokes = () => {
  fetch(url)
    .then((data) => data.json())
    .then((item) => {
      quote_container.innerHTML = `${item.joke}`;
    });
};

getJokes();

// function getJokes () {
//      fetch(url)
//        .then((data) => data.json())
//        .then((item) => {
//          quote_container.innerHTML = `${item.joke}`;
//        });
// }
