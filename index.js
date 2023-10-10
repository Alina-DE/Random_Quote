"use strict"

let quoteElem = document.querySelector("#quote");
let authorElem = document.querySelector("#author");

let url = "https://zenquotes.io/api/quotes";

fetch(url)
  .then( response => response.json())
  .then( data => {

    // console.log(data);

    let randomIndex = Math.floor(Math.random()*data.length)

    if (data[randomIndex].a != "Donald Trump") {
        quoteElem.textContent = data[randomIndex].q;
        authorElem.textContent = data[randomIndex].a;

    } else {
        quoteElem.textContent = data[randomIndex-1].q;
        authorElem.textContent = data[randomIndex-1].a;
    }
});


// Writing the date to the "footer"
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
