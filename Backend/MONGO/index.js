const mongoose = require("mongoose");
const express = require('express');
const teacher = require('./models/teacher');
const book = require('./models/books');

// this function is async by default and returns a promise;
mongoose.connect("mongodb://127.0.0.1:27017/college")
.then((resolve)=>{
    console.log("connected");
})
.catch((err) => console.log(err));

// whatever name u give to your collection... mongoose will automatically lowercase it and pluralize it.
const t1 = new teacher({
    name : "Mehul Singh",
    info:[{
        cluster: "alpha",
        department: "AIML"
    }]
});

// .save() returns a promise as it's an asynchronus task.

// t1.save()
// .then(()=>{
//     console.log("Added");
// });

// .find() returns a MONGOOSE QUERY OBJECT on which we can use .then()
// NOTE: it does NOT return a promise;

teacher.find({name:"Mehul Singh"})
.then((data) => {
    console.log(data);
}).catch((err)=>{
    console.log(err);
});

const b1 = new book({
    title : "Gay Bimari",
    author: "chetan bhagat",
    price : 300
});

b1.save()
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    // how to access the custom error defined in the models schema validator.
    console.log(error.errors.price.properties.message);
});

book.find()
.then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error);
});
