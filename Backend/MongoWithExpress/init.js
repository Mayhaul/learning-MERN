const mongoose = require('mongoose');

// connecting to the NoSQL DB.
mongoose.connect("mongodb://127.0.0.1:27017/whatsapp")
.then((resolve)=>{
    console.log("connected");
})
.catch((err) => console.log(err));

// require models
const Chat = require("./models/chat");

const allChats = [
    {
        from: "neha",
        to: "priya",
        msg: "Send me the notes for the exam",
        created_at: new Date()
    },
    {
        from: "priya",
        to: "neha",
        msg: "Sure, I'll send them by evening",
        created_at: new Date()
    },
    {
        from: "amit",
        to: "sumit",
        msg: "Are we still playing cricket today?",
        created_at: new Date()
    },
    {
        from: "rahul",
        to: "riya",
        msg: "Happy Birthday! Have a great one.",
        created_at: new Date()
    },
    {
        from: "sneha",
        to: "anjali",
        msg: "Did you finish the React project?",
        created_at: new Date()
    }
];


Chat.insertMany(allChats)
    .then((res) => {
        console.log("Successfully inserted all chats:");
        console.log(res);
    })
    .catch((err) => {
        console.log("Error inserting chats:", err);
    });