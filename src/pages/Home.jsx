import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="relative">
      <div className="text-center mt-10">
        <h2 className="text-5xl font-bold text-gray-800 mb-6">
          Welcome to MyReact Store 🛒
        </h2>
        <p className="text-xl text-gray-600 max-w-xl mx-auto">
          Explore our products, add them to your cart, and enjoy shopping with ease!
        </p>
        <div className="flex justify-center items-center flex-col gap-6 *:mt-8">
          <div className="p-6 bg-white/50 backdrop-blur-md rounded-2xl shadow-lg w-80 text-center">
            <Link to="/products" className="text-xl font-bold mb-4 ">Stylish Products🧺</Link>
            <p>Browse our latest collection of gadgets and accessories.</p>
          </div>

          <div className="p-6 bg-white/60 backdrop-blur-md rounded-2xl shadow-lg w-80 text-center">
            <Link to="/delivery" className="text-xl font-bold mb-4 ">Fast Delivery 🚚</Link>
            <p>We deliver your favorite products right to your doorstep.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
