const mongoose = require('mongoose');
const addUsers = require('./models/oneToFew');
// connecting to the NoSQL DB.
mongoose.connect("mongodb://127.0.0.1:27017/relations")
.then((resolve)=>{
    console.log("connected");
})
.catch((err) => console.log(err));

addUsers();