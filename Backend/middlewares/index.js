const express = require('express');
const app = express();
const port = 8080;

// Creating utility middleware
app.use((req,res,next)=>{
    req.responseTime = new Date(Date.now()).toString();
    console.log(req.method, req.route, req.responseTime,req.hostname);
    next();
});

app.get('/',(req,res)=>{
    res.send("Home page");
});

app.listen(port,()=>{
    console.log("App is listening!")
});