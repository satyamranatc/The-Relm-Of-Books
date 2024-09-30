import React, { useState, useEffect } from 'react';
import ProductGrid from './ProductGrid';
import ProductDisplay from './ProductDisplay.jsx';
import {Routes, Route} from 'react-router-dom';

import './Products.css';


export default function Products() {




  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<ProductGrid />} />
        <Route path="/productDetails/:id" element={<ProductDisplay />} />
      </Routes>
     
    </div>
  );
}