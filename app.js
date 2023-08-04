const express = require("express"); // require gareko express lai
const app = express(); // tyo require gareko lai  call gareko
// app vanney mathi ko variable chae throughout the project use hunchha

// setting up ejs, telling nodejs to use ejs 
app.set('view engine','ejs')

app.get("/", (req, res) => {
  res.render('home',{name :"Mahesh"})
  // res.render("home",{name:"Manish"}) passing value to home.ejs 
  
});

app.get("/about", (req, res) => {
  res.render('about')
});

app.get("/contact", (req, res) => {
  res.render('contact')
});


// port no(room No) : 1300 - 650000, 1300 vanda tala chae internal system lay use garirahunchha

app.listen(4000, function () {
  console.log("Node js project started");
});
