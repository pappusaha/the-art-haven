import React from 'react';

const CraftItems = ({items}) => {
    const {itemName,subCategoryType,email,userName,processingTime,price,rating,imageURL,customization,stockStatus,message}=items
    return (
        <div>
           <div className="max-w-xs p-6 rounded-md shadow-md bg-gray-900 text-gray-50">
	<img src={imageURL} alt="" className="object-cover object-center w-full rounded-md h-72 bg-gray-500" />
	<div className="mt-6 mb-2">
		<span className="block text-xs font-medium tracking-widest uppercase text-violet-400">Quisque</span>
		<h2 className="text-xl font-semibold tracking-wide">{itemName}</h2>
	</div>
	<p className="text-gray-100">Mauris et lorem at elit tristique dignissim et ullamcorper elit. In sed feugiat mi. Etiam ut lacinia dui.</p>
</div>
        </div>
    );
};

export default CraftItems;