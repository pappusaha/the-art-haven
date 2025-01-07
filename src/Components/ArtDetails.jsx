import React, { useEffect } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import 'aos/dist/aos.css';
import AOS from 'aos';
import Swal from 'sweetalert2'


const ArtDetails = () => {
    const singleArtDetails = useLoaderData();
 
 
 
    const {_id, email, userName, imageURL, itemName, subCategoryType, processingTime, price, rating, customization, stockStatus, message } = singleArtDetails;
    useEffect(() => {
        AOS.init();
    }, []);
const deleteArtItems=(id) => {
console.log(id)
Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
   fetch(`http://localhost:5000/craftItems/${id}`,
    {
        method:'DELETE',
    }
   )
   .then(res => res.json())
.then(data=> {
    console.log(data)
    if(data.deletedCount>0){

Swal.fire({
      title: "Deleted!",
      text: "Your product is deleted.",
      icon: "success"
    });
    }
})
.catch((error) => {
    console.error(error)
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: '<a href="#">Why do I have this issue?</a>'
      });
})

    
  }
});

}
    return (
    <section className=' py-12 lg:py-20 max-w-7xl mx-auto'>
  <div className="container mx-auto p-8 flex flex-col lg:flex-row gap-12">
            {/* Image Section */}
            <div className="w-full lg:w-1/2 flex justify-center items-center" data-aos="fade-right"
     data-aos-easing="linear"
     data-aos-duration="1000">
                <img 
                    src={imageURL} 
                    alt={itemName} 
                    className="w-full max-w-2xl rounded-lg shadow-lg min-h-full" 
                />
            </div>

            {/* Details Section */}
            <div className="w-full lg:w-1/2 space-y-6" data-aos="fade-left"
     data-aos-easing="linear"
     data-aos-duration="1000">
                <h2 className="text-4xl font-bold">{itemName}</h2>
                <p className="text-lg text-gray-600">{message}</p>
                <p className="text-2xl font-semibold text-green-600">Price: ${price}</p>

                {/* Details Table */}
                <div className=" space-y-3 border-t pt-4">
                    <p>
                        <span className="font-semibold text-gray-700">Type:</span> {subCategoryType}
                    </p>
                    <p>
                        <span className="font-semibold text-gray-700">Availability:</span> 
                        <span className={`font-medium ${stockStatus === 'In Stock' ? 'text-green-600' : 'text-red-600'}`}>
                            {stockStatus}
                        </span>
                    </p>
                    <p>
                        <span className="font-semibold text-gray-700">Rating:</span> {rating}
                    </p>
                    <p>
                        <span className="font-semibold text-gray-700">Made by:</span> {userName}
                    </p>
                    <p>
                        <span className="font-semibold text-gray-700">Email:</span> {email}
                    </p>
                    <p>
                        <span className="font-semibold text-gray-700">Customization:</span> 
                        {customization ? ' Available' : ' Not Available'}
                    </p>
                    <p>
                        <span className="font-semibold text-gray-700">Processing Time:</span> {processingTime}
                    </p>
                   <div className='flex justify-between'>
                   <button className='btn'> Add to my list</button>

                   <button onClick={() => deleteArtItems(_id)} className='btn'> Delete product</button>
                   </div>
                  
                </div>
                
            </div>
           
        </div>
        <Link to={`/editArt/${_id}`}> <button className='w-full btn'> Update item</button></Link>

    </section>
      
    );
};

export default ArtDetails;
