const express = require("express");
const app = express();

const port = 8080;

app.set("view engine", "ejs");

app.get("/",(req,res)=>{
    res.render("home.ejs");
});

app.get("/home",(req,res)=>{
    res.render("home.ejs");
});

app.listen(port, ()=>{
    console.log("listening on port 8080");
});

app.get("/login",(req,res)=>{
    res.render("login.ejs");
});