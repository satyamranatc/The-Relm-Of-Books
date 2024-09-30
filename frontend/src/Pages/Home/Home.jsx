import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ChevronLeft, ChevronRight, ShoppingCart } from 'lucide-react';
import './Home.css';

const sliderImages = [
  { url: 'https://edit.org/images/cat/book-covers-big-2019101610.jpg', alt: 'Book Store Welcome' },
  { url: 'https://edit.org/images/cat/book-covers-big-2019101610.jpg', alt: 'Featured Books' },
  { url: 'https://edit.org/images/cat/book-covers-big-2019101610.jpg', alt: 'Special Offers' },
];

export default function Home() {
  const [allBooksData, setBookData] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("http://localhost:5100/api/data");
        setBookData(response.data.BooksData);
      } catch (error) {
        console.error("Error fetching book data:", error);
      }
    }
    fetchData();
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);
  };

  return (
    <div className="container">
      {/* Image Slider */}
      <div className="slider-container">
        <div className="slider-wrapper" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {sliderImages.map((image, index) => (
            <img key={index} src={image.url} alt={image.alt} className="slider-image" />
          ))}
        </div>
        <button onClick={prevSlide} className="slider-button slider-button-left">
          <ChevronLeft size={24} />
        </button>
        <button onClick={nextSlide} className="slider-button slider-button-right">
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Book Grid */}
      <div className="book-grid">
        {allBooksData.map(book => (
          <div key={book.id} className="book-card">
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
    </div>
  );
}