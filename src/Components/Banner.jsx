import React from 'react';

const Banner = () => {
    return (
        <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full ">
        <div
  className="hero   "
  style={{
    backgroundImage: "url(https://dtvisualarts.wpenginepowered.com/wp-content/uploads/2017/06/gal1.jpg)",
  }}>
    
        
            <div> <h3> thisis padinaj</h3></div>
            </div>  
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
        <div id="slide1" className="carousel-item relative w-full">
        <div
  className="hero md:h-[500px]"
  style={{
    backgroundImage: "url(https://artistic-codezeel.myshopify.com/cdn/shop/files/main-banner-1_1903x650.jpg?v=1652420060;)",
  }}>
        
            <div> <h3 className='text-red-900'> thisis gad;fhidf</h3></div>
            </div>  
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
        <div id="slide1" className="carousel-item relative w-full">
      
       <div
  className="hero min-h-screen md:h-[500px] bg-center"
  style={{
    backgroundImage: "url(https://i.postimg.cc/k4Lr03cW/Brown-Illustration-Street-Desktop-Wallpaper.png)",
  }}>
        
            <div> <h3> thisis coradjfkajdkf</h3></div>
          
       </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">❮</a>
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
        <div
  className="hero min-h-screen  bg-center"
  style={{
    backgroundImage: "url(https://wdtregalia.wpengine.com/wp-content/uploads/2024/04/Hotspot-img-5-h2-1536x794.jpg)",
  }}>
        
            <div> <h3 className='text-red-900'> thisis coradjfkajdkf</h3></div>
          
       </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">❮</a>
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
    );
};

export default Banner;