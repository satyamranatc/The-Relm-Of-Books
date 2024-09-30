import React from 'react'   

//* Library
import {BrowserRouter,Routes,Route } from "react-router-dom"
//* Components
import NavBar from './Components/NavBar'
//* Pages
import Home from './Pages/Home/Home'
import Products from './Pages/Products/Products'
import Cart from './Pages/Cart/Cart'
// ?----------------------------------------------------------------

export default function App() {
  return (
    <div className='App'>

    <BrowserRouter>
        {/* NavBar */}
        <NavBar />

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/*" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
        </Routes>
    
    </BrowserRouter>

        
    </div>
  )
}
