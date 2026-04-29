const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const Chat = require("./models/chat");

const app = express();
const PORT = 8080;

// ---------------- MIDDLEWARE ----------------
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ---------------- VIEW ENGINE ----------------
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// ---------------- DB CONNECTION ----------------
mongoose.connect("mongodb://127.0.0.1:27017/whatsapp")
.then(() => console.log("MongoDB connected"))
.catch(err => console.error(err));

// ---------------- ROUTES ----------------

// HOME (READ)
app.get("/", async (req, res) => {
    try {
        const chats = await Chat.find();
        res.render("home", { chats });
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// CREATE FORM
app.get("/chats/new", (req, res) => {
    res.render("newChat");
});

// CREATE
app.post("/chats", async (req, res) => {
    try {
        await Chat.create(req.body);
        res.redirect("/");
    } catch (err) {
        console.error(err);
        res.status(500).send(err.message);
    }
});

// EDIT FORM
app.get("/chats/:id/edit", async (req, res) => {
    try {
        const chat = await Chat.findById(req.params.id);
        if (!chat) return res.status(404).send("Chat not found");

        res.render("edit", { chat });
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// UPDATE
app.post("/chats/:id", async (req, res) => {
    try {
        await Chat.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        res.redirect("/");
    } catch (err) {
        console.error(err);
        res.status(500).send(err.message);
    }
});

// DELETE
app.post("/chats/:id/delete", async (req, res) => {
    try {
        await Chat.findByIdAndDelete(req.params.id);
        res.redirect("/");
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// ---------------- SERVER ----------------
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});