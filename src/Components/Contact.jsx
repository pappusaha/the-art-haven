import React from 'react';

const Contact = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between items-start bg-gray-100 p-10 md:p-20">
            {/* Contact Form */}
            <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-6">Contact Us</h2>
                <form className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-gray-700 font-medium">Name</label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Name"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-gray-700 font-medium">Email *</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="phone" className="block text-gray-700 font-medium">Phone number</label>
                        <input
                            type="tel"
                            id="phone"
                            placeholder="Phone number"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="comment" className="block text-gray-700 font-medium">Comment</label>
                        <textarea
                            id="comment"
                            placeholder="Your comment"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            rows="4"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="px-6 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition duration-200"
                    >
                        Send
                    </button>
                </form>
            </div>

            {/* Contact Info */}
            <div className="w-full md:w-1/2 mt-10 md:mt-0 md:ml-10">
                <h2 className="text-2xl font-semibold mb-6">Get In Touch With Us</h2>
                <p className="text-gray-700 mb-4">
                    We create premium and professional website templates for the most popular platforms available in the market today.
                </p>
                <div className="space-y-4">
                    <div className="flex items-center">
                        <span className="text-gray-600 mr-4">🏠</span>
                        <p>33 New Montgomery St. Ste 750 San Francisco, CA, USA 94105</p>
                    </div>
                    <div className="flex items-center">
                        <span className="text-gray-600 mr-4">📞</span>
                        <p>(+91)012-345-6789</p>
                    </div>
                    <div className="flex items-center">
                        <span className="text-gray-600 mr-4">✉️</span>
                        <p>coffeeter@exampledemo.com</p>
                    </div>
                    <div className="flex items-center">
                        <span className="text-gray-600 mr-4">🕒</span>
                        <p>Monday – Friday 10 AM – 8 PM</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
