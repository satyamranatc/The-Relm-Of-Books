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

const Books = mongoose.model("Book", BookSchema);
export default Books;