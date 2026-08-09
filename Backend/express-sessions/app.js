import express from 'express';
import cookieParser from 'cookie-parser';
import session from 'express-session'

const app = express();
const port = 6969;

// ---------------- MIDDLEWARE ----------------
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser('secret'));

app.use(session({
     secret: "mysecret",
     resave: false,
     saveUninitialized: true
    })
);


app.get('/',(req,res)=>{
    res.send(req.session.count);
});



app.get('/count',(req,res)=>{
    if(req.session.count){
        req.session.count++;
    }else{
        req.session.count = 1;
    }
    console.log(req.session);
    res.send(`You have visited the page ${req.session.count} times`);
})

app.listen(port,()=>{
    console.log('started');
})