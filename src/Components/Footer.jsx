import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Our Information */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Our Information</h3>
          <p>33 New Montgomery St. Ste 750 San Francisco, CA, USA 94105</p>
          <p>📞 (+91)012-345-6789</p>
          <p>📧 artistic@exampledemo.com</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-400">🌐</a>
            <a href="#" className="hover:text-blue-400">📘</a>
            <a href="#" className="hover:text-blue-400">📸</a>
            <a href="#" className="hover:text-blue-400">🎥</a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-400">Contact Us</a></li>
            <li><a href="#" className="hover:text-blue-400">Shipping</a></li>
            <li><a href="#" className="hover:text-blue-400">Sitemap</a></li>
            <li><a href="#" className="hover:text-blue-400">FAQs</a></li>
            <li><a href="#" className="hover:text-blue-400">Stores</a></li>
          </ul>
        </div>

        {/* Services */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Services</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-400">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-blue-400">Policy for Sellers</a></li>
            <li><a href="#" className="hover:text-blue-400">Policy for Buyers</a></li>
            <li><a href="#" className="hover:text-blue-400">Shipping & Refund</a></li>
            <li><a href="#" className="hover:text-blue-400">Wholesale Policy</a></li>
          </ul>
        </div>

        {/* Information */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Information</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-400">Delivery Information</a></li>
            <li><a href="#" className="hover:text-blue-400">About Us</a></li>
            <li><a href="#" className="hover:text-blue-400">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-blue-400">Terms and Conditions</a></li>
            <li><a href="#" className="hover:text-blue-400">Search</a></li>
          </ul>
        </div>
      </div>

      <div className="mt-8 text-center border-t border-gray-700 pt-4">
        <p>© 2025 Canvas-Strokes English. All Rights Reserved.</p>
        <p className="mt-2">Powered by React & Tailwind CSS</p>
      </div>
    </footer>
  );
};

export default Footer;
