import { useState } from "react";

function Cart({ cart, removeFromCart }) {
  const [checkedOut, setCheckedOut] = useState(false);
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const handleCheckout = () => {
    setCheckedOut(true);
    // You can add more logic here, e.g., API call, clearing cart, etc.
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 w-80">
      <h2 className="text-xl font-semibold mb-4">🛒 Cart ({cart.length})</h2>
      {cart.length === 0 ? (
        <p className="text-gray-500 italic ">Your cart is empty!</p>
      ) : checkedOut ? (
        <p className="text-green-600 font-semibold">Thank you for your purchase!</p>
      ) : (
        <>
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center mb-3 border-b pb-2"
            >
              <p className="text-gray-700">
                {item.name} - ₹{item.price.toLocaleString("en-IN")}
              </p>
              <button
                onClick={() => removeFromCart(item)}
                className="text-red-600 hover:underline"
              >
                Remove
              </button>
            </div>
          ))}
          <h3 className="text-lg font-semibold mt-4">
            Total: ₹{total.toLocaleString("en-IN")}
          </h3>
          <button
            className="mt-4 w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700"
            onClick={handleCheckout}
          >
            Checkout
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;
