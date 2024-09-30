import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sun, Moon, ShoppingCart, Book, User } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [currentTheme, setCurrentTheme] = useState('light');

  const toggleTheme = () => {
    setCurrentTheme(currentTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <nav className={`navbar ${currentTheme}`}>
      <div className="navbar-container">
        <div className="navbar-logo">Book Store</div>
        <div className="navbar-links">
          <Link to="/" className="navbar-link">Home</Link>
          <Link to="/products" className="navbar-link">Products</Link>
          <Link to="/cart" className="navbar-link">
            <ShoppingCart size={18} />
            Cart
          </Link>
          <Link to="/my-books" className="navbar-link">
            <Book size={18} />
            My Books
          </Link>
          <Link to="/profile" className="navbar-link">
            <User size={18} />
            Profile
          </Link>
          <button onClick={toggleTheme} className="theme-toggle">
            {currentTheme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
