import React from 'react';
import { NavLink } from 'react-router-dom';

const CraftItems = ({items}) => {
    const {itemName,subCategoryType,email,userName,processingTime,price,rating,imageURL,customization,stockStatus,message,_id}=items
   
    return (
    

<section>
<div className="card  w-96 shadow-xl bg-slate-100">
        <figure className="px-10 pt-10">
          <img
            src={imageURL}
            alt="Shoes"
            className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{itemName}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions">
           <NavLink to={`/artDetails/${_id}`}   className="bg-cyan-700 text-white px-6 py-2 rounded-md font-medium    cursor-grab transition  ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500  duration-300" > View Details</NavLink>
          
          </div>
        </div>
      </div>
<div>
    
</div>
</section>

    );
};

export default CraftItems;