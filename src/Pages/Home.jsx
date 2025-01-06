import React from 'react';
import Banner from '../Components/Banner';
import Marquee from "react-fast-marquee";
import Footer from '../Components/Footer';
import Category from '../Components/Category';
import Gallery from '../Components/Gallery';
import Artist from '../Components/Artist';
import Newsletter from '../Components/Newsletter';
import Content from '../Components/content';
import CraftItems from '../Components/craftItems';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
  const craftItems=useLoaderData()
    return (
        <div className='bg-slate-50'>
          
            
            <Banner></Banner>
           

  <div className="relative w-full overflow-hidden bg-gradient-to-r from-cyan-200 to-indigo-200 py-4">
      <div
        className=""
      >
        
        <Marquee className='text-2xl text-slate-100 font-extrabold py-3'> 
        Free shipping on orders over $100 -- Yearly Art Exhibition Pass -- Art
        Beginner's Course -- 40% off Hand-Made Paintings
        </Marquee>
      </div>
     
    </div>
    <Category></Category>
    {
      craftItems.map(items => <CraftItems key={items._id} items={items}></CraftItems> )
    }
   
    <Gallery></Gallery>
    <Artist></Artist>
    <Content></Content>
    <Newsletter></Newsletter>
    <Footer></Footer>
        </div>
    );
};

export default Home;


// inline-block whitespace-nowrap text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 animate-scroll