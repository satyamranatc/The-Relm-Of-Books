import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ChevronLeft, ChevronRight, ShoppingCart } from 'lucide-react';
export default function ProductGrid() {
    let Navigate = useNavigate();

    const [allBooksData, setBookData] = useState([]);
    useEffect(() => {
        async function fetchData() {
          try {
            const response = await axios.get("http://localhost:5100/api/books/getlist");
            setBookData(response.data.BooksData);
          } catch (error) {
            console.error("Error fetching book data:", error);
          }
        }
        fetchData();
      }, []);
  return (
   <>
     {/* Book Grid */}
     <div className="book-grid"  >
        {allBooksData.map(book => (
          <div onClick={()=>Navigate(`productDetails/${book.id}`)} key={book.id} className="book-card">
            <img src={book.poster} alt={book.title} className="book-image" />
            <div className="book-info">
              <h3 className="book-title">{book.title}</h3>
              <p className="book-description">{book.description}</p>
              <p className="book-author">Author: {book.author}</p>
              <div className="book-price-cart">
                <span className="book-price">${book.price.toFixed(2)}</span>
                <button className="add-to-cart-button">
                  <ShoppingCart size={16} className="add-to-cart-icon" />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
   </>
  )
}
