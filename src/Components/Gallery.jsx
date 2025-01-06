import React from 'react';
import { Slide } from "react-awesome-reveal";

const Gallery = () => {
    return (
        <section className="py-6 bg-gray-200 text-gray-50">
	<div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
	<Slide direction="left" cascade triggerOnce>
	<img src="https://russell-collection.com/wp-content/uploads/2024/10/what-is-acrylic-painting.jpg" alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 bg-gray-500 aspect-square" />
      </Slide>
		
		<Slide direction="right" cascade triggerOnce className=''> 

		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square" src="https://chairish-prod.freetls.fastly.net/image/product/sized/84c61685-70cb-4911-abe9-268975887087/abstract-portrait-original-acrylic-painting-7925?aspect=fit&width=640&height=640" />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square" src="https://steemitimages.com/DQma18o6FYxWXcgjv6BU49MzSzCET6WPiS2bsRYYM2Jz9m8/2-charcoal-drawing.jpg" />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square" src="https://demo.curlythemes.com/art-gallery-wp/wp-content/uploads/sites/24/2017/09/8327484907_b59ba5d26b_o-1013x1024.jpg" />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square" src="https://demo.curlythemes.com/art-gallery-wp/wp-content/uploads/sites/24/2017/09/15559420867_7730d79305_o-1024x819.jpg" />
		</Slide>
		<Slide direction="left" cascade triggerOnce className=''>
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square" src="https://demo.curlythemes.com/art-gallery-wp/wp-content/uploads/sites/24/2017/09/girlbytheriver-1.jpg" />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square" src="https://artyshils.com/cdn/shop/products/yiQG7LjvRvm6kSvT1Lmc_Untitled_20design_20_288_29.png?v=1676516000&width=750" />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square" src="https://i.pinimg.com/736x/e7/bb/98/e7bb980067709d23cf8ee81dacdb6f70.jpg" />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square" src="https://m.media-amazon.com/images/I/71O0PUh4d1L._AC_SY741_.jpg" />
		</Slide>
		<Slide>
		<img src="https://as2.ftcdn.net/jpg/06/04/66/99/1000_F_604669908_m0Wld6RrwOD8wER58tTvzkmZcdIWa5H5.webp" alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 bg-gray-500 aspect-square" />
		</Slide>
	</div>
</section>
    );
};

export default Gallery;