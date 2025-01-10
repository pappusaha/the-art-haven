import React, { useState } from "react";
import { useForm } from "react-hook-form";

import { Link } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";


const  RegistrationPage = () => {
  const regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,}$/; // পাসওয়ার্ডের জন্য সঠিক রেগেক্স
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signUpUser,goggleLogin } = UseAuth();

  const onSubmit = (data) => {
    console.log(data)
    const { email, password, name, image } = data;
console.log(email)
    // পাসওয়ার্ড যাচাই
    if (!regex.test(password)) {
      setErrorMessage(
        "পাসওয়ার্ডটি হতে হবে ৬ অক্ষরের, একটি সংখ্যা, একটি বিশেষ চিহ্ন, একটি ছোট হাতের এবং একটি বড় হাতের অক্ষর সহ।"
      );
      alert("দয়া করে সঠিক পাসওয়ার্ড দিন।");
      return; // ভুল পাসওয়ার্ড হলে এখানেই ফাংশন থেমে যাবে।
    }

    // সঠিক পাসওয়ার্ড হলে ত্রুটির বার্তা মুছে দিন
    setErrorMessage("");

    // একাউন্ট তৈরি
    signUpUser(email, password)
    .then((result) => {
     
      const user = result.user;
      console.log(result)
    }).catch((error) => {
      // Handle Errors here.
      
      const errorMessage = error.message;
      // The email of the user's account used.
      console.log(errorMessage)
    });
  };


  return (
    <div className="flex h-screen bg-gray-100 ">
      {/* Left side - Image */}
      <div className="w-1/2 hidden md:flex items-center justify-center bg-cover bg-center" 
           style={{ backgroundImage: `url('https://i.postimg.cc/J4JTvqBS/6325230.jpg')`}}>
      </div>

      {/* Right side - Registration Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-center mb-4">Registration</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Name */}
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                {...register("name", { required: true })}
                placeholder="Enter your name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>

            {/* Email */}
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                {...register("email", { required: true })}
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>

            {/* Password */}
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                {...register("password", { required: true })}
                placeholder="Enter your password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
              {
                errorMessage && (
                  <p className="text-red-500 text-sm">{errorMessage}</p>
                )
              }
            </div>

            {/* Image Link */}
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="imageLink">Image Link</label>
              <input
                type="url"
                id="imageLink"
                name="imageLink"
                {...register("imageLink", { required: true })}
                placeholder="Enter image link"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Social Login Buttons */}
            <div className="flex justify-between mb-4">
              <button
              onClick={()=>goggleLogin()}
                type="button"
                className="w-full mr-2 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
              >
                Google
              </button>
              <button
                type="button"
                className="w-full ml-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Facebook
              </button>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 mb-4"
            >
              Register
            </button>

            {/* Navigation to Login */}
            <p className="text-center text-gray-600">
              Already have an account? 
            <Link to={'/registrationPage'}>
            <button className="text-blue-500 hover:underline ml-1">
                Log In
              </button>
            </Link>
            </p>
          </form>
        </div>
      </div>
      
    </div>
  );
}

export default RegistrationPage;
