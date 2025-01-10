import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"
import UseAuth from "../Hooks/UseAuth";


const LogIn=() =>{

  const {signIn,goggleLogin,facebookLogIn}=UseAuth()
    const { register, handleSubmit,formState:{ errors }} = useForm()
  

    const onSubmit = (data) => {
      console.log(data)
      const {email, password}=data
      signIn(email,password)
      .then(result =>
       
      {
        console.log(result.user)
        alert('login sucesessfully')
      }
      )
      .catch((error) => {
       
        const errorMessage = error.message;
        alert('either user or password is wrong')
      });
    }
  

  const [passwordVisible, setPasswordVisible] = useState(false);



  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="flex h-screen bg-gray-100 items-center justify-center overflow-hidden relative">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: `url('https://i.postimg.cc/BbNw7ZzN/6300959.jpg')`,
        }}
      ></div>

      {/* Animated Login Form */}
      <div className="relative bg-white p-8 rounded-lg shadow-md w-full max-w-md transform transition duration-500 hover:scale-105">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2">
              Email
            </label>
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
          <div className="mb-4 relative">
            <label htmlFor="password" className="block text-gray-700 mb-2">
              Password
            </label>
            <input
              type={passwordVisible ? "text" : "password"}
              id="password"
              name="password"
              {...register("password", { required: true })}
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-slate-100 text-slate-400"
              required
            />
              {errors.password && <span>This field is required</span>}
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-3 top-5 flex items-center text-gray-500"
            >
              {passwordVisible ? "👁️" : "🙈"}
            </button>
          </div>

          {/* Social Login Buttons */}
          <div className="flex justify-between mb-4">
            <button onClick={() => goggleLogin()}
              type="button"
              className="w-full mr-2 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
            >
              Google
            </button>
            <button
            onClick={() => facebookLogIn()}
              type="button"
              className="w-full ml-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Facebook
            </button>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Login
          </button>
        </form>

        {/* Navigate to Registration */}
        <p className="text-center text-gray-600 mt-4">
          New here?{" "}
         <Link to={'/registrationPage'}> <button
            
            className="text-blue-500 hover:underline"
          >
            Register
          </button></Link>
        </p>
      </div>
    </div>
  );
}

export default LogIn;
