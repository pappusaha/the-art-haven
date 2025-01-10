import React, { useState } from 'react';
import Banner from '../Components/Banner';
import Marquee from "react-fast-marquee";

import Category from '../Components/Category';
import Gallery from '../Components/Gallery';
import Artist from '../Components/Artist';
import Newsletter from '../Components/Newsletter';
import Content from '../Components/content';
import CraftItems from '../Components/craftItems';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
  const craftItems=useLoaderData()
  const [artItems, setArtItems]=useState(craftItems)
  const[showAllItems, setAllItems]=useState(false)

  const displayItems= showAllItems ? artItems : artItems.slice(0,6)
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
   <div className='max-w-6xl mx-auto'>
   <Category></Category>
   <div className=' pt-20 border-t-2 my-28'>
    <p className='text-xl'>Our New art</p>
<h2 className='text-5xl'>Explore our new Art</h2>
    
   <div className='grid grid-cols-2 lg:grid-cols-3 gap-3 my-28 '>
   {
      displayItems.map(items => <CraftItems key={items._id} items={items}></CraftItems> )
    }


   </div>
   <div >
 {
  artItems.length>6 &&(
<button className="px-8 py-2 rounded-md bg-yellow-200 text-white font-bold hover:bg-cyan-600 transition duration-300" onClick={ () => setAllItems(!showAllItems)}>
  { showAllItems ? 'show Less ' : 'show all'}
</button>

  )
 }
   </div>
   </div>
   
    <Gallery></Gallery>
    <Artist></Artist>
    <Content></Content>
   </div>
    <Newsletter></Newsletter>
   
        </div>
    );
};

export default Home;


// inline-block whitespace-nowrap text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 animate-scroll