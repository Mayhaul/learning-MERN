const mongoose = require("mongoose");

// this function is async by default and returns a promise;
mongoose.connect("mongodb://127.0.0.1:27017/college")
.then((resolve)=>{
    console.log("connected");
})
.catch((err) => console.log(err));

const teacherSchema = new mongoose.Schema({
    name: { type: String, required: true },
    info: [
        {
            cluster: { type: String, required: true },
            department: { type: String, required: true }
        }
    ]
});

const teacher = mongoose.model("teacher",teacherSchema);

const t1 = new teacher({
    name : "harjeet Singh",
    info:[{
        cluster: "alpha",
        department: "AIML"
    }]
});

t1.save()
.then(()=>{
    console.log("Added");
});