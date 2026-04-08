const express = require("express");
const path = require("path");

const app = express();
const port = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));

app.listen(port,()=>{
    console.log(`Listening to port ${port}`);
});

let posts = [
    { username: "Apna College", content: "I love coding" },
    { username: "Mehul Verma", content: "Mehul loves coding" },
    { username: "Aarav Sharma", content: "Frontend feels like art" },
    { username: "Vivaan Gupta", content: "Debugging is my cardio" },
    { username: "Aditya Singh", content: "C++ > everything" },
    { username: "Krishna Patel", content: "Learning DSA daily" },
    { username: "Ishaan Mehta", content: "Backend is powerful" },
    { username: "Rohan Kapoor", content: "Java is underrated" },
    { username: "Arjun Nair", content: "APIs are magic" },
    { username: "Kabir Das", content: "Consistency beats talent" },
    { username: "Reyansh Jain", content: "Node.js all day" },
    { username: "Yash Agarwal", content: "React makes life easy" },
    { username: "Harsh Verma", content: "I love solving problems" },
    { username: "Siddharth Malhotra", content: "Clean code matters" },
    { username: "Ananya Sharma", content: "UI/UX is everything" },
    { username: "Priya Kapoor", content: "Design + code = ❤️" },
    { username: "Sneha Reddy", content: "Python is beautiful" },
    { username: "Neha Gupta", content: "Data is the new oil" },
    { username: "Ritika Singh", content: "Machine learning grind" },
    { username: "Pooja Mehta", content: "AI is the future" },
    { username: "Karan Khanna", content: "Always be building" },
    { username: "Rahul Bansal", content: "Startups are chaotic fun" },
    { username: "Amit Tiwari", content: "System design is tough" },
    { username: "Deepak Yadav", content: "Practice makes perfect" },
    { username: "Vikas Chauhan", content: "Linux is love" },
    { username: "Manish Kumar", content: "Terminal feels powerful" },
    { username: "Nitin Arora", content: "Git saves lives" },
    { username: "Suresh Iyer", content: "Code. Sleep. Repeat." },
    { username: "Rajesh Pillai", content: "Optimization is fun" },
    { username: "Abhishek Das", content: "Never stop learning" },
    { username: "Varun Saxena", content: "DSA is a mindset" },
    { username: "Tarun Mittal", content: "Hackathons are intense" },
    { username: "Gaurav Joshi", content: "Build in public" },
    { username: "Shubham Mishra", content: "Focus on fundamentals" },
    { username: "Ayush Srivastava", content: "Code daily" },
    { username: "Rajat Verma", content: "Ship fast, iterate faster" },
    { username: "Mohit Jain", content: "Errors teach more than success" },
    { username: "Akash Choudhary", content: "Cloud is everywhere" },
    { username: "Dev Patel", content: "Scalability matters" },
    { username: "Nikhil Sharma", content: "Keep it simple" }
];

app.get('/posts',(req,res)=>{
    res.render("home",{posts});
});

app.get('/posts/new',(req,res)=>{
    res.render("new");
});

app.post('/posts',(req,res)=>{
    console.log(req.body);
    posts.push(req.body);
    res.redirect("/posts");
});
