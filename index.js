"use strict"

let quoteElem = document.querySelector("#quote");
let authorElem = document.querySelector("#author");

let url = "https://type.fit/api/quotes";

let quote;
let author;

fetch(url)
  .then( response => response.json())
  .then( data => {

    let randomIndex = Math.floor(Math.random()*data.length)

    quote = data[randomIndex].text
    author = data[randomIndex].author

    if (author != "Donald Trump") {
        quoteElem.textContent = quote;
        authorElem.textContent = author;
    } else {
        return
    }
});




(function () {
    let date = new Date();

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let months = ["January","February","March","April","May","June","July", "August","September","October","November","December"];

    let day = date.getDay();
    let dayOfMonth = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();

    document.querySelector("#time").textContent = `${days[day]}, ${months[month]} ${dayOfMonth}, ${year}`

})();