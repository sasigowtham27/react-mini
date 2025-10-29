function ProductCard({ product, addToCart }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 w-60 text-center hover:shadow-lg transition">
      <img
        src={product.image}
        alt={product.name}
        className="h-40 w-full object-cover rounded-md mb-3"
      />
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-gray-800 mb-2">₹{product.price.toLocaleString("en-IN")}</p>
      <button
        onClick={() => addToCart(product)}
        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
