import React from "react";

function Delivery() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-200 via-blue-200 to-purple-300 p-6">
      <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl w-full max-w-3xl p-10 text-center overflow-hidden">
      
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-gradient-to-r from-green-400 to-blue-400 rounded-full opacity-30 blur-2xl animate-pulse"></div>
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-30 blur-2xl animate-pulse"></div>

        <h1 className="text-5xl font-extrabold text-gray-800 mb-4">
          🚛 Fast & Reliable Delivery
        </h1>
        <p className="text-gray-600 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
          We ensure your favorite products reach you swiftly and safely — right
          at your doorstep. Enjoy real-time tracking and smooth delivery service
          all across India.
        </p>

        {/* Delivery Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 text-gray-700">
          <div className="bg-white/70 hover:bg-white rounded-2xl shadow-lg p-6 transition transform hover:-translate-y-1 hover:shadow-2xl">
            <div className="text-4xl mb-3">⏰</div>
            <h2 className="text-2xl font-semibold mb-2">Quick Shipping</h2>
            <p>
              Orders are dispatched within{" "}
              <span className="font-bold text-blue-700">24 hours</span>. Get
              your products in{" "}
              <span className="font-bold text-green-700">
                2–3 business days
              </span>
              .
            </p>
          </div>

          <div className="bg-white/70 hover:bg-white rounded-2xl shadow-lg p-6 transition transform hover:-translate-y-1 hover:shadow-2xl">
            <div className="text-4xl mb-3">📦</div>
            <h2 className="text-2xl font-semibold mb-2">Live Order Tracking</h2>
            <p>
              Receive real-time tracking updates via email or SMS for your
              order’s journey from our store to your door.
            </p>
          </div>

          <div className="bg-white/70 hover:bg-white rounded-2xl shadow-lg p-6 transition transform hover:-translate-y-1 hover:shadow-2xl">
            <div className="text-4xl mb-3">💸</div>
            <h2 className="text-2xl font-semibold mb-2">Free Delivery</h2>
            <p>
              Enjoy{" "}
              <span className="font-bold text-green-700">free shipping</span> on
              orders above ₹999 anywhere in India — no hidden fees!
            </p>
          </div>
        </div>

        {/* Support Section */}
        <div className="mt-12 text-gray-700">
          <p className="text-lg">Have any questions about delivery?</p>
          <a
            href="/contact"
            className="inline-block mt-2 text-blue-600 font-semibold hover:underline hover:text-blue-800 transition"
          >
            Contact our support team →
          </a>
        </div>
      </div>
    </div>
  );
}

export default Delivery;
