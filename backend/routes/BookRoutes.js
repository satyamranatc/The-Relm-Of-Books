import { Router } from "express";
import Books from "../models/BookModel.js";

const bookRoutes = Router();

// Book routes
bookRoutes.get("/getlist", async (req, res) => {
    try {
        const books = await Books.find({});
        res.json(books);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


bookRoutes.post("/add", async (req, res) => {
    const book = new Books({
        id: req.body.id,
        poster: req.body.poster,
        title: req.body.title,
        author: req.body.author,
        price: req.body.price,
        description: req.body.description,
        rating: req.body.rating
    });
    console.log(book);

    try {
        const newBook = await book.save();
        res.status(201).json(newBook);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

export default bookRoutes;


