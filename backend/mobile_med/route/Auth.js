const express = require('express');
const authRouter = express.Router();
const User = require("../module/schema");
const bcrypt = require('bcrypt');
authRouter.use(express.json());
authRouter.post("/signup", async (req, res) => {
    try {
        const { name, email, password, role } = req.body;
        console.log(req.body);
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Email already registered" });
        }
        const hashPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ name, email, password: hashPassword, role });
        await newUser.save();
        res.json({ message: "Signed up successfully" });
    } catch (error) {
        console.error("Signup error:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});
authRouter.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        const data = await User.findOne({ email });
        if (!data) {
            return res.status(404).json({ message: "User not found!" });
        }
        const match = await bcrypt.compare(password, data.password);
        if (!match) {
            return res.status(401).json({ message: "Incorrect password!" });
        }
        res.json({ message: `${data.name} has logged in successfully` });
    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});
authRouter.get("/alluser", async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        console.error("Fetch users error:", error);
        res.status(500).json({ message: error.message });
    }
});
module.exports = authRouter ;