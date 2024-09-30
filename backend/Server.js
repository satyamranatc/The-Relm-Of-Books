import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import "dotenv/config"

const app = express();
app.use(cors());
app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.json({
        data: "Welcome"
    })
})


let Books = [
    {
        id: 1,
        poster:"https://img.freepik.com/free-psd/flat-design-nature-poster-template_23-2149392825.jpg",
        title: "Book 1",
        author: "Author 1",
        price: 10.99,
        description: "Description 1",
        rating: 4.6
    },{
        id: 2,
        poster:"https://img.freepik.com/free-psd/flat-design-nature-poster-template_23-2149392825.jpg",
        title: "Book 2",
        author: "Author 2",
        price: 15.99,
        description: "Description 2",
        rating: 4.6
    },{
        id: 3,
        poster:"https://img.freepik.com/free-psd/flat-design-nature-poster-template_23-2149392825.jpg",
        title: "Book 3",
        author: "Author 3",
        price: 20.99,
        description: "Description 3",
        rating: 4.6
    },{
        id: 4,
        poster:"https://img.freepik.com/free-psd/flat-design-nature-poster-template_23-2149392825.jpg",
        title: "Book 4",
        author: "Author 4",
        price: 25.99,
        description: "Description 4"
        ,
        rating: 4.6
    },{
        id: 5,
        poster:"https://img.freepik.com/free-psd/flat-design-nature-poster-template_23-2149392825.jpg",
        title: "Book 5",
        author: "Author 5",
        price: 30.99,
        description: "Description 5",
        rating: 4.6
    }
]



app.get('/api/data', (req, res) => {
    res.json({
        BooksData:Books
    })
})

app.get('/api/GetOneBook/:id', (req, res) => {
    const bookId = parseInt(req.params.id);
    let book = Books.filter((e)=>e.id == bookId)
    res.json({
        BookData:book
    })
})

const PORT = process.env.PORT || 5101;

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})






