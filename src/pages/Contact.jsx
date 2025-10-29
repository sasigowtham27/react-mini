
import React from "react";
function Contact() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-300 via-purple-300 to-pink-300">
      <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl w-[80%] max-w-xl p-5 md:p-8">
        {/* Title Section */}
        <div className="text-center mb-6">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-2">Get in Touch</h1>
          <p className="text-gray-600 text-sm md:text-base">
            We'd love to hear from you! Fill out the form below.
          </p>
        </div>

        {/* Contact Form */}
        <form className="space-y-6">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="flex-1 p-1 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="flex-1 p-1 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <input
            type="text"
            placeholder="Subject"
            className="w-full p-1 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          <textarea
            placeholder="Your Message"
            rows="2"
            className="w-full p-1 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
          ></textarea>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold text-lg shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="mt-10 text-center text-gray-700 space-y-1">
          <p>📧 support@myreactstore.com</p>
          <p>📞 +91 7010604812</p>
          <p>📍 Salem, India</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
