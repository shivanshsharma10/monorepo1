import express from "express";
import { prisma } from "@repo/db";

const app = express();
app.use(express.json());

// A test route to create a member in your Render DB
app.post("/signup", async (req, res) => {
    const { email, name } = req.body;
    try {
        const user = await prisma.member.create({
            data: { email, name }
        });
        res.json({ message: "User created!", user });
    } catch (e) {
        res.status(400).json({ error: "User already exists or DB error" });
    }
});

app.listen(3002, () => {
    console.log("Server running on http://localhost:3000");
});