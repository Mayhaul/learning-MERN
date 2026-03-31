const express = require("express");
const app = express();
const path = require("path");

const port = 8080;

// In frameworks like Express (Node.js), app.set() is used to store 
// a configuration value inside the app object.
// app.set(key,value);
// key = name of the setting.
// value = what u want to store.

app.set("view engine", "ejs");
// here "view setting" is the key/setting. and "ejs" is the value.
// app.get("view engine");

// app.set("views",path.join(__dirname,"views"));

app.get("/",(req,res)=>{
    res.render("home.ejs");
});

app.get("/home",(req,res)=>{
    res.render("home.ejs",{name: "Mehul"});
});

app.listen(port, ()=>{
    console.log("listening on port 8080");
});

app.get("/login",(req,res)=>{
    res.render("login.ejs");
});