const express = require("express"); // require gareko express lai
const app = express(); // tyo require gareko lai  call gareko
// app vanney mathi ko variable chae throughout the project use hunchha

app.get("/", (req, res) => {
  res.send("<h2>hello world </h2>");
});

app.get("/about", (req, res) => {
  res.send("I am from about page");
});

app.get("/contact", (req, res) => {
  res.send("I am from contact page");
});

// port no(room No) : 1300 - 650000, 1300 vanda tala chae internal system lay use garirahunchha

app.listen(4000, function () {
  console.log("Node js project started");
});
