import express from 'express';
import cookieParser from 'cookie-parser';

const app = express();
 const port = 6969;

// ---------------- MIDDLEWARE ----------------
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser('secret'));


app.get('/sendCookies',(req,res)=>{
    res.cookie('Mehul', 'Verma', {signed: true});
    res.cookie("Gay", "Satija");

    res.send('Cookie khalo')
})

app.get('/',(req,res)=>{
    // req.cookies parses cookies attached to incoming HTTP headers
    const { Mehul, Gay } = req.cookies;
    console.log(`Cookies received -> Mehul: ${Mehul}, Gay: ${Gay}`);

    res.send(`Cookies read: ${Mehul} & ${Gay}`);
})

app.get('/verify', (req,res)=>{
    res.send(req.signedCookies);
})

app.listen(port, ()=>{
    console.log(`app is listing at http://localhost:${port}`);
})
