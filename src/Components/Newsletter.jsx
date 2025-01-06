import React from "react";

const Newsletter = () => {
  return (
    <div className=" text-white p-10  bg-center" 
    style=
    {{backgroundImage:"url(https://artistic-codezeel.myshopify.com/cdn/shop/files/newsletter-parallax.jpg?v=1652440273)",}}
    >
      <div className="max-w-4xl mx-auto text-center space-y-6">
        {/* Header */}
        <h2 className="text-4xl font-bold">
          Subscribe to Our <span className="text-yellow-300">Newsletter</span>
        </h2>
        <p className="text-lg">
          Stay updated with the latest art and craft inspirations, tips, and
          exclusive offers!
        </p>

        {/* Form */}
        <form className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-3 w-full sm:w-2/3 rounded-md focus:ring-2 focus:ring-yellow-300 focus:outline-none text-gray-800"
            required
          />
          <button
            type="submit"
            className="bg-yellow-300 text-gray-800 px-6 py-3 rounded-md font-semibold hover:bg-yellow-400 transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
