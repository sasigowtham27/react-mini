import React from "react";
import ProductCard from "./ProductCard";
import laptop from "../assets/laptop.jpg";
import headphone from "../assets/headphone.jpg";
import smartwatch from "../assets/smartwatch.jpg";
import keyboard from "../assets/keyboard.jpg";

const products = [
  { id: 1, name: "Laptop", price: 75000, image: laptop },
  { id: 2, name: "Headphone", price: 2000, image: headphone },
  { id: 3, name: "Smart Watch", price: 5000, image: smartwatch },
  { id: 4, name: "Keyboard", price: 1500, image: keyboard },
];
function ProductList({ addToCart }) {
  return (
    
    <div className=" flex flex-wrap gap-6 justify-center backdrop-blur-2xl p-6 rounded-xl shadow-lg bg-red/30">
 
      {products.map((p) => (
        <ProductCard key={p.id} product={p} addToCart={addToCart} />
      ))}
    </div>
   
  );
}

export default ProductList;
