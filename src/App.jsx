import { useState } from "react";
import { Routes, Route, Link, Router } from "react-router-dom";
import ProductList from "./pages/ProductList";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Delivery from "./pages/Delivery";





function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => setCart([...cart, product]);
  const removeFromCart = (product) =>
    setCart(cart.filter((p) => p.id !== product.id));

  return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-300 via-pink-200 to-yellow-200 text-gray-800">
        {/* Navbar */}
        <nav className="bg-indigo-600 text-white p-5 flex justify-between items-center">
          <h1 className="text-3xl font-bold">🛍️ MyReact Store</h1>
          <div className="flex gap-4">
            <Link to="/" className="text-2xl hover:text-pink-400">Home </Link>
            <Link to="/products" className="text-2xl hover:text-pink-400">  Products </Link>
             <Link to="/contact" className="text-2xl hover:text-pink-400">Contact</Link>
          </div>
        </nav>

        <div className="p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/delivery" element={<Delivery />} />

            <Route
              path="/products"
              element={
                <div className="flex flex-wrap gap-10 justify-center">
                  <ProductList addToCart={addToCart} />
                  <Cart cart={cart} removeFromCart={removeFromCart} />
                </div>
              }
            />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>

  );
}

export default App;



     
     
   