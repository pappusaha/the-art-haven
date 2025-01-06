import React from 'react';
import { useForm } from "react-hook-form"

const AddItems = () => {
    const {
        register,
        handleSubmit,
    
        formState: { errors },
      } = useForm()

      const onSubmit = (data) => {
console.log(data)
        fetch('http://localhost:5000/craftItems',{
method:'POST',
headers:{
    'content-type':'application/json'
},
body: JSON.stringify(data)
        } 

        )
        .then(res => res.json())
        .then(data => console.log(data))
      }


    return (
        <div className="bg-gradient-to-r from-blue-50 to-teal-100 min-h-screen flex items-center justify-center p-6 py-28">
            <section className="bg-white shadow-2xl rounded-lg w-full max-w-5xl p-8">
                <form onSubmit={handleSubmit(onSubmit)} className="shadow-lg rounded-lg p-6">
                    <div className="text-center mb-8">
                        <h2
                            className="text-4xl font-extrabold tracking-wide bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text"
                        >
                            <span className='text-sky-700'>Add</span> Your Items
                        </h2>
                    </div>

                    <div className="lg:flex justify-between space-x-7">
                        {/* প্রথম অংশ */}
                        <div className="space-y-4 flex-1 border-2 p-4 rounded-lg bg-gradient-to-br from-white to-gray-50">
                            <div className="flex flex-col">
                                <label
                                    htmlFor="firstName"
                                    className="font-semibold text-lg mb-2 text-teal-700"
                                >
                                    Item Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="Item Name"
                                    name='itemName'
                                    className="border-2 p-3 bg-slate-100 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                                    defaultValue="test" {...register("itemName",{ required: true }) }
                                />
                            </div>
                            <div className="flex flex-col">
                                <label
                                    htmlFor="subCategoryType"
                                    className="font-semibold text-lg mb-2 text-teal-700"
                                >
                                    Subcategory
                                </label>
                                <select
                                    id="subCategoryType"
                                    name="subCategoryType"
                                    {...register("subCategoryType",{ required: true }) }
                                    className="p-3 border-2 bg-slate-100 rounded-md focus:ring-2 focus:ring-teal-500"
                                >
                                    <option>Landscape Painting</option>
                                    <option>Portrait Drawing</option>
                                    <option>WaterColour Painting</option>
                                    <option>Oil Painting</option>
                                    <option>Charcoal Sketching</option>
                                    <option>Cartoon Drawing</option>
                                    <option>Abstract Art</option>
                                    <option>Media</option>
                                </select>
                            </div>
                            <div className="flex flex-col">
                                <label
                                    htmlFor="UserEmail"
                                    className="font-semibold text-lg mb-2 text-teal-700"
                                >
                                    User Email
                                </label>
                                <input
                                    type="email"
                                    name='email'
                                    {...register("email",{ required: true }) }
                                    placeholder="example@gmail.com"
                                    className="w-full bg-slate-100 rounded-md border-2 p-3 focus:ring-2 focus:ring-teal-500"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label
                                    htmlFor="UserName"
                                    className="font-semibold text-lg mb-2 text-teal-700"
                                >
                                    User Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="User Name"
                                    name='userName'
                                    {...register("userName",{ required: true }) }
                                    className="w-full bg-slate-100 rounded-md border-2 p-3 focus:ring-2 focus:ring-teal-500"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label
                                    htmlFor="processingTime"
                                    className="font-semibold text-lg mb-2 text-teal-700"
                                >
                                    Processing Time
                                </label>
                                <input
                                    type="text"
                                    name='processingTime'
                                    placeholder="Processing Time"
                                    {...register("processingTime",{ required: true}) }
                                    className="w-full bg-slate-100 rounded-md border-2 p-3 focus:ring-2 focus:ring-teal-500"
                                />
                            </div>
                        </div>

                        {/* দ্বিতীয় অংশ */}
                        <div className="space-y-4 flex-1 border-2 p-4 rounded-lg bg-gradient-to-br from-white to-gray-50">
                            <div className="flex flex-col">
                                <label
                                    htmlFor="price"
                                    className="font-semibold text-lg mb-2 text-teal-700"
                                >
                                    Price
                                </label>
                                <input
                                    type="number"
                                    placeholder="Price"
                                    {...register("price",{ required: true}) }
                                    className="w-full bg-slate-100 rounded-md border-2 p-3 focus:ring-2 focus:ring-teal-500"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label
                                    htmlFor="rating"
                                    className="font-semibold text-lg mb-2 text-teal-700"
                                >
                                    Rating
                                </label>
                                <input
                                    type="number"
                                    placeholder="Rating"
                                    {...register("rating",{ required: true}) }
                                    className="w-full bg-slate-100 rounded-md border-2 p-3 focus:ring-2 focus:ring-teal-500"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label
                                    htmlFor="image"
                                    className="font-semibold text-lg mb-2 text-teal-700"
                                >
                                    Image
                                </label>
                                <input
                                    type="text"
                                    placeholder="Image URL"
                                    name='imageURL'
                                    {...register("imageURL",{ required: true}) }
                                    className="w-full bg-slate-100 rounded-md border-2 p-3 focus:ring-2 focus:ring-teal-500"
                                />
                                  {errors.imageURL && <p role="alert">{errors.imageURL.message}</p>}
                            </div>
                            <div className="flex flex-col">
                                <label
                                    htmlFor="customization"
                                    className="font-semibold text-lg mb-2 text-teal-700"
                                >
                                    Customization
                                </label>
                                <select
                                    id="customization"
                                    name="customization"
                                    {...register("customization",{ required: true}) }
                                    className="p-3 bg-slate-100 border-2 rounded-md focus:ring-2 focus:ring-teal-500"
                                >
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </select>
                            </div>
                            <div className="flex flex-col">
                                <label
                                    htmlFor="stockStatus"
                                    className="font-semibold text-lg mb-2 text-teal-700"
                                >
                                    Stock Status
                                </label>
                                <select
                                    id="stockStatus"
                                    name="stockStatus"
                                    {...register("stockStatus",{ required: true}) }
                                    className="p-3 bg-slate-100 border-2 rounded-md focus:ring-2 focus:ring-teal-500"
                                >
                                    <option value="inStock">In stock</option>
                                    <option value="madeToOrder">No</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6">
                        <label htmlFor="message" className="font-semibold text-lg mb-2 text-teal-700">Short Description</label>
                        <textarea
                            name="message"
                            {...register("message",{ required: true}) }
                            className='w-full bg-slate-200 rounded-md p-3 border-2 focus:ring-2 focus:ring-teal-500'
                            placeholder="The cat was playing in the garden."
                        />
                    </div>
                    <input
                        type="submit"
                        value="Add Items"
                        className='w-full mt-6 bg-gradient-to-r from-teal-500 to-sky-600 text-white py-3 rounded-md font-bold hover:opacity-90 cursor-pointer'
                    />
                </form>
            </section>
        </div>
    );
};

export default AddItems;
