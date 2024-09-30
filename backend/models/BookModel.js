import mongoose from "mongoose";

let BookSchema = new mongoose.Schema({
    id: Number,
    poster: String,
    title: String,
    author: String,
    price: Number,
    description: String,
    rating: Number
})

export default Book = mongoose.model("Book", BookSchema);