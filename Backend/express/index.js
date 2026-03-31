// Express does 4 things.
// Listen to requests
// Parse
// Routes
// response

const express = require("express");
// app is an object.
const app = express();
const path= require("path");

const dataBase = require("../data.json");

console.dir(app);
// express helps us to listen to incoming requests.

let port = 3000;
// Ports are the logical endpoints of a network
// connection that is used to exchange information
// btw a web server and a web client.
// basically connects one point to another.

// we make the server listen for any coming requests.
app.listen(port , ()=>{
    console.log(`App is listening on ${port}`);
});

// we track the requests with use. this listens to all requests.
// app.use((req,res)=>{
//     console.log("request recieved");
//     res.send("Hello");
// });

// Routing: its a process of selecting a path for traffic
// in a network or btw or across multiplle network.
// this listens to specific req.



app.set("views", path.join(__dirname, "../EJSdir/views"));
// app.set("views", path) defines where Express should look for 
// template files when res.render() is called, ensuring it doesn’t rely on default paths that may be incorrect.
app.set("view engine", "ejs");

app.get("/home",(req,res)=>{
    console.log(dataBase);
    res.render("home",{name : dataBase});
});

app.get("/login",(req,res)=>{
    console.log("This is the login page");
    // res.send("login page");
    res.render("login");
});

// path parameters.
app.get("/home/:user",(req,res)=>{
    console.log("This is the Home page");
    console.log(req.params);

    // Query string: when a url has "q?=queryString"
    console.log(req.query);
    res.send("Home page");
});