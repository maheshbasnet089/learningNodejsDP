const express = require("express"); // require gareko express lai
const { users } = require("./model/index");
const app = express(); // tyo require gareko lai  call gareko
// app vanney mathi ko variable chae throughout the project use hunchha

// requiring datbase
require("./model/index");

// parsing formData(form bata aako data lai parse gar)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// setting up ejs, telling nodejs to use ejs
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("home", { name: "Mahesh" });
  // res.render("home",{name:"Manish"}) passing value to home.ejs
});

// POST method(http verbs)
app.post("/register", async(req, res) => {
  // jaile pani form ko input data req.body ma aauxa
// traditional/old step
  // const name = req.body.name
  // const password = req.body.password
  // const email = req.body.email
  // const userName = req.body.userName
  // const profile = req.body.profile

  // new way ma garda (Destructuring object)
  const {name,password} = req.body
  // console.log(name,password)

  // database ma halnu paryo
  await  users.create({
    name : req.body.name, // first name vaneko column name ho, second name vaneko form bata aako value
    password : req.body.password
  })

  res.redirect("/about")

});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

// port no(room No) : 1300 - 650000, 1300 vanda tala chae internal system lay use garirahunchha

app.listen(4000, function () {
  console.log("Node js project started");
});
