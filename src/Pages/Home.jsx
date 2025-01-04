import React from 'react';
import Navbar from '../Components/Navbar';
import Banner from '../Components/Banner';

const Home = () => {
    return (
        <div className='bg-slate-50'>
          
            <Navbar></Navbar>
            <Banner></Banner>
        </div>
    );
};

export default Home;