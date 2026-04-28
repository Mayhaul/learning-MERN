const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 8080;
const path = require('path');

const Chat = require("./models/chat");

app.use(express.json());
// Middleware to parse URL-encoded bodies (from HTML forms)
app.use(express.urlencoded({ extended: true }));

// make the app listen on the internet.
app.listen(port,()=>{
    console.log("Server is live");
})

// connecting to the NoSQL DB.
mongoose.connect("mongodb://127.0.0.1:27017/whatsapp")
.then((resolve)=>{
    console.log("connected");
})
.catch((err) => console.log(err));

// view engine key is set to the value ejs.
app.set("view engine", "ejs");

// Home route. Read API
app.get("/", async (req, res) => {
    let chats = await Chat.find();
    res.render("home", {
        title: "My Awesome App",
        name: "Mehul",
        chats:chats
    });
});

// Create API
app.get("/chats/new",(req,res)=>{
    res.render("newChat");
});

app.post("/chats",async (req,res)=>{
    let chat = [req.body];
    await Chat.insertOne(chat);
    console.log(chat);
    res.redirect('/');
});