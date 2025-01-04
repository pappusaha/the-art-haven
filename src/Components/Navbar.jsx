import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

  const navLinks=<>
 <li>  <NavLink to={'/'} className={'hover:text-amber-600 hover:font-extrabold'}> Home </NavLink></li>
 <li> <NavLink to={'/allItems'} className={'hover:text-amber-900 hover:font-extrabold'}> All Items </NavLink> </li>
 <li>  <NavLink to={'/addItem'}> Add Item </NavLink></li>
 <li>   <NavLink to={'/myCreations'}>  My Creations </NavLink></li>
  
  </>
  return (
    <div className="navbar bg-slate-50 bg-opacity-5 static">
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
        <a href="/" className="btn btn-ghost text-xl">Art Haven</a>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal space-x-6-6">
        {navLinks}
          
        </ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end">
        {/* Profile Dropdown */}
        <input
  type="checkbox"
  value="synthwave"
  className="toggle theme-controller col-span-2 col-start-1 row-start-1 border-sky-400 bg-amber-300 [--tglbg:theme(colors.sky.500)] checked:border-blue-800 checked:bg-blue-300 checked:[--tglbg:theme(colors.blue.900)]" />
        <div className="dropdown dropdown-end">
          <button
            tabIndex={0}
            aria-label="Open profile menu"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="User avatar"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </button>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a href="/" >
                Profile
             
              </a>
            </li>
            
            <li><a href="/">Logout</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
