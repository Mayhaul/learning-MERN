const mongoose = require("mongoose");

// this function is async by default and returns a promise;
mongoose.connect("mongodb://127.0.0.1:27017/college")
.then((resolve)=>{
    console.log("connected");
})
.catch((err) => console.log(err));
