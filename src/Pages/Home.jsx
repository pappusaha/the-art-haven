import React from 'react';
import Navbar from '../Components/Navbar';
import Banner from '../Components/Banner';
import Marquee from "react-fast-marquee";

const Home = () => {
    return (
        <div className='bg-slate-50'>
          
            <Navbar></Navbar>
            <Banner></Banner>
            <button class="relative px-4 py-2 font-bold text-white uppercase transition-transform transform hover:scale-105 shadow-md rounded-md">
    <div class="absolute inset-0 bg-gradient-to-r from-purple-500 to-orange-500 rounded-md"></div>
    <span class="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">Abstract</span>
  </button>

  <div className="relative w-full overflow-hidden bg-gradient-to-r from-purple-500 to-orange-500 py-2">
      <div
        className="inline-block whitespace-nowrap text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 animate-scroll"
      >
        Free shipping on orders over $100 -- Yearly Art Exhibition Pass -- Art
        Beginner's Course -- 40% off Hand-Made Paintings
      </div>
    </div>
        </div>
    );
};

export default Home;