import React from 'react';
import { NavLink } from 'react-router-dom';
import UseAuth from '../Hooks/UseAuth';

const Navbar = () => {

  const navLinks=<>
 <li>  <NavLink to={'/'} className={' text-gray-800 hover:text-amber-600'}> Home </NavLink></li>
 <li> <NavLink to={'/allItems'} className={'text-gray-800 hover:text-amber-600'}> All Items </NavLink> </li>
 <li>  <NavLink to={'/addItems' } className={'text-gray-800 hover:text-amber-600'}> Add Item </NavLink></li>
 <li>   <NavLink to={'/myCreations'} className={'text-gray-800 hover:text-amber-600'}>  My Creations </NavLink></li>
 <li>   <NavLink to={'/Contact'} className={'text-gray-800 hover:text-amber-600'}>  Contact us </NavLink></li>
  
  </>
  const{user,logout}=UseAuth()
  return (
  <section className='bg-sky-100  bg-opacity-50 shadow-lg  fixed top-0 left-0 right-0 z-50 '>
<div className="navbar bg-opacity-05 static w-11/12 mx-auto  ">
    {/* Navbar Start */}
    <div className="navbar-start">
      {/* Dropdown Menu for Mobile */}
      <div className="dropdown">
        <button
          tabIndex={0}
          aria-label="Open menu"
          className="btn btn-ghost lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </button>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
        >
          {navLinks}
        </ul>
      </div>
      {/* Logo */}
      <div>
        <img
          className="w-11"
          src="https://i.postimg.cc/7PRKDBrm/DALL-E-2025-01-04-08-02-17-A-minimalist-and-elegant-logo-design-for-The-Art-Haven-The-logo-feat.png"
          alt="Logo"
        />
      </div>
      {/* Site Name */}
      <a
        href="/"
        className="btn btn-ghost font-black text-xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400"
      >
        Art Haven
      </a>
    </div>
  
    {/* Navbar Center */}
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal space-x-6 text-transparent bg-clip-text text-slate-800 font-semibold hover:bg-amber-500">
        {navLinks}
      </ul>
    </div>
  
    {/* Navbar End */}
    <div className="navbar-end flex items-center space-x-6">
      {/* Hotline Number */}
      <div className="hidden lg:block">
        <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400 font-semibold">
          Hotline: +880-1234-567890
        </p>
      </div>
  
      {/* Profile Dropdown */}

      {
        user ?(
          <div className="dropdown dropdown-end">
        <button
          tabIndex={0}
          aria-label="Open profile menu"
          className="btn btn-ghost btn-circle avatar"
        >
          <div className="w-10 rounded-full">
            <img
              alt="User avatar"
              src={user.photoURL || 'https://www.shutterstock.com/shutterstock/photos/2069253944/display_1500/stock-vector-female-cartoon-character-no-face-vector-illustration-2069253944.jpg'}
            />
          </div>
        </button>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
        >
          <li>
            <a href="/">{user.displayName
            }</a>
          </li>
          <li>
            <a href="/"><button onClick={()=>logout()} className='btn btn-sm btn-ghost'>
            LogOut
              </button></a>
          </li>
        </ul>
      </div>
        ) : (
          <NavLink to={'/login'} className={ 'bg-sky-300 py-1 px-3 rounded-lg text-amber-400 font-bold outline outline-offset-2 outline-1 ... '}>      
     <button >
      Login 
     </button></NavLink>
        )
      }
 
    
    </div>
  </div>
  </section>
  
  
  );
};

export default Navbar;
