import { Router } from "express";
import Books from "/models/BookModel.js";

const router = Router();

// Book routes
router.get("/api/books", async (req, res) => {
    try {
        const books = await Book.find({});
        res.json(books);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});