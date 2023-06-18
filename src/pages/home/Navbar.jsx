import React from 'react';
import logo from "../../assets/logo/FliqaIndia-Logo.png"

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-[#131514]">
        <div className="flex-1 ml-12">
          <img src={logo} alt="" />
          <ul className="menu menu-horizontal px-1 text-white text-xl">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Service</a>
            </li>
            <li>
              <a>Portfolio</a>
            </li>
            <li>
              <a>Community</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
          </ul>
        </div>
        <div className="flex-none gap-6 mr-14">
          <button className="bg-[#004D58] px-4 py-2 rounded-full text-xl text-white ">
            Sign Up
          </button>
          <button className="bg-[#004D58] px-4 py-2 rounded-full text-xl text-white ">
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;