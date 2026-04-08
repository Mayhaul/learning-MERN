const express = require("express");
const path = require("path");

const { v4 : uuidv4 } = require('uuid');

const app = express();
const port = 8080;

// parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));

app.listen(port,()=>{
    console.log(`Listening to port ${port}`);
});

let posts = [
    { id: uuidv4(), username: "Apna College", content: "I love coding" },
    { id: uuidv4(), username: "Mehul Verma", content: "Mehul loves choding" },
    { id: uuidv4(), username: "Aarav Sharma", content: "Frontend feels like art" },
    { id: uuidv4(), username: "Vivaan Gupta", content: "Debugging is my cardio" },
    { id: uuidv4(), username: "Aditya Singh", content: "C++ > everything" },
    { id: uuidv4(), username: "Krishna Patel", content: "Learning DSA daily" },
    { id: uuidv4(), username: "Ishaan Mehta", content: "Backend is powerful" },
    { id: uuidv4(), username: "Rohan Kapoor", content: "Java is underrated" },
    { id: uuidv4(), username: "Arjun Nair", content: "APIs are magic" },
    { id: uuidv4(), username: "Kabir Das", content: "Consistency beats talent" },
    { id: uuidv4(), username: "Reyansh Jain", content: "Node.js all day" },
    { id: uuidv4(), username: "Yash Agarwal", content: "React makes life easy" },
    { id: uuidv4(), username: "Harsh Verma", content: "I love solving problems" },
    { id: uuidv4(), username: "Siddharth Malhotra", content: "Clean code matters" },
    { id: uuidv4(), username: "Ananya Sharma", content: "UI/UX is everything" },
    { id: uuidv4(), username: "Priya Kapoor", content: "Design + code = ❤️" },
    { id: uuidv4(), username: "Sneha Reddy", content: "Python is beautiful" }
];

app.get('/', (req,res)=>{
    res.redirect('/posts');
});

app.get('/posts',(req,res)=>{
    res.render("home",{posts});
});

app.get('/posts/new',(req,res)=>{
    res.render("new");
});

// Get single post by ID
app.get('/posts/:id', (req, res) => {
    const { id } = req.params;
    const post = posts.find((p) => p.id === id);

    if (post) {
        res.render("show", { post });
    } else {
        res.status(404).send("404 Post not found");
    }
});

app.post('/posts',(req,res)=>{
    console.log(req.body);
    let {username,content} = req.body;
    let id = uuidv4();
    posts.push({id,username,content});
    res.redirect("/posts");
});

// 1. Show Edit Form
app.get('/posts/:id/edit', (req, res) => {
    const { id } = req.params;
    const post = posts.find(p => p.id === id);

    if (!post) {
        return res.status(404).send("Post not found");
    }

    res.render("edit", { post });
});

// 2. Update Post (Use POST + hidden method or just POST)
app.post('/posts/:id', (req, res) => {        // Changed to POST
    const { id } = req.params;
    const { content } = req.body;             // ← Correct: use "content"

    const post = posts.find(p => p.id === id);

    if (post) {
        post.content = content;               // Update content
        res.redirect(`/posts/${id}`);         // Correct redirect with real ID
    } else {
        res.status(404).send("Post not found");
    }
});

// see what method override does.
