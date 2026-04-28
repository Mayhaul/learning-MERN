const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title:{
        type:String,
        required: true
    },
    author:{
        type: String,
        required: true
    },
    price:{
        type:Number,
        required: [true,"Free me thodi bechega bhai pls add price"]
        // [schemaValidator value, custom error which will come if schema not followed]
    }

});

const Book = mongoose.model("Book",bookSchema);
module.exports = Book;