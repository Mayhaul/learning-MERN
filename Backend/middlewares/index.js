const express = require('express');
const app = express();
const port = 8080;
const CustomError = require('./errorClass');

// Creating utility middleware
// app.use((req,res,next)=>{
//     req.responseTime = new Date(Date.now()).toString();
//     console.log(req.method, req.url , req.responseTime,req.hostname);
//     next();
// });

// Calling req.route inside global middleware returns undefined
// because Express doesn't yet know which route the request will match.
// Global middleware runs for every request before route matching occurs.

function Method(req,res,next){
    console.log(req.route);
    if(1==1){
        const err = new CustomError("error putt",500);
        next(err);
    }else{
        next();
    }
}



app.get('/',Method,(req,res)=>{
    res.send("Home page");
});

// Asychronus calls.
app.get('/fact',async(req,res,next)=>{
    try{
        let x = await fetch('https://catfact.ninja/breeds');
        
        if(x.status === 404){
            return next(new CustomError("not valid fetch url",500));
        }

        
        let data = await x.json();
        console.log(data);
        res.status(x.status).send(data.data[0]);
    }catch(err){
        next(err);
    }
});

app.use((err,req,res,next)=>{
    // if we call custom error then message and status code will be replaced. 
    // else if the error is from a catch block like catch(err){next(err)}.
    // then only the message will be changed as the default error object doesnt have status code.
    let {message = "Some error occoured", status = 500} = err;
    res.status(status).send(message);
});




app.listen(port,()=>{
    console.log("App is listening!")
});

