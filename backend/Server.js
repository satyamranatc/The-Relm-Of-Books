import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import "dotenv/config"
import mongoose from 'mongoose';

import bookRoutes from './routes/BookRoutes.js';

const app = express();
app.use(cors());
app.use(bodyParser.json());


// Db Conncection:
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
   .then(() => console.log('MongoDB Connected...'))
   .catch(err => console.log(err));


// Routes

// Import routes
app.use('/api/books', bookRoutes);



const PORT = process.env.PORT || 5101;

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})






