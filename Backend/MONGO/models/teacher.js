const mongoose = require('mongoose');

// give a schema to your collection.
// NOTE: The schema can be overridden if u insert a document from the mongosh REPL.
const teacherSchema = new mongoose.Schema({
    name: { type: String, required: true },
    info: [
        {
            cluster: { type: String, required: true },
            department: { type: String, required: true }
        }
    ]
});

// Think of this as fitting the schema for the collection.
const teacher = mongoose.model("teacher",teacherSchema);
module.exports = teacher;