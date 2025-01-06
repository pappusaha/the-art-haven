// App.js
import React from 'react';
import { Bounce } from "react-awesome-reveal";

const Content = () => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-gray-50 p-6 md:p-12">
      {/* Left Section: Image */}
     
    <Bounce direction='right' cascade triggerOnce className="w-full ">
    <div className="w-full md:w-1/2">

   
        <img
          src="https://artista-painting.mybigcommerce.com/product_images/uploaded_images/latestbanner-1.jpg"
          alt="Artwork"
          className="rounded-lg shadow-lg"
        />
     </div>
    </Bounce>
    

      {/* Right Section: Features */}
      <Bounce className=''>
      <div className="w-full md:w-1/2 mt-6 md:mt-0 md:ml-8">
        <div className="space-y-6">
          {/* Feature 1 */}
          <div className="flex items-center space-x-4">
            <div className="text-xl text-gray-800">
              <i className="fas fa-shipping-fast"></i>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Free Shipping</h3>
              <p className="text-gray-600">
                There are many variations of passages Lorem Ipsum available.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-center space-x-4">
            <div className="text-xl text-gray-800">
              <i className="fas fa-headset"></i>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Online Support</h3>
              <Bounce direction="right" cascade triggerOnce>
        <div className="feature">🚀 Performance</div>
        <div className="feature">💡 Simplicity</div>
        <div className="feature">🎨 Customization</div>
      </Bounce>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex items-center space-x-4">
            <div className="text-xl text-gray-800">
              <i className="fas fa-money-bill-wave"></i>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Cash on Delivery</h3>
              <p className="text-gray-600">
                There are many variations of passages Lorem Ipsum available.
              </p>
            </div>
          </div>
        </div>
      </div>
      </Bounce>
    </div>
  );
};

export default Content;
