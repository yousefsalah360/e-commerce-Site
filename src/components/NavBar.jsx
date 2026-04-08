import React from "react";
import { assets } from "../assets/frontend_assets/assets";
import { NavLink, Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [visible, setVisible] = useState(false);

  return (
    <div className="flex items-center justify-between font-medium py-5">
     <Link to="/"> <img src={assets.logo} className="w-36" alt="" /></Link>

      <ul className="hidden sm:flex gap-5 text-gray-700">
        <NavLink to="/">
          {({ isActive }) => (
            <div className="relative flex flex-col items-center gap-1 group">
              <p>HOME</p>

              <span
                className={`
          absolute -bottom-1 h-[2px] bg-gray-700 transition-all duration-300
          ${isActive ? "w-1/2" : "w-0 group-hover:w-1/2"}
        `}
              ></span>
            </div>
          )}
        </NavLink>
        <NavLink to="/collection">
          {({ isActive }) => (
            <div className="relative flex flex-col items-center gap-1 group">
              <p>COLLECTION</p>

              <span
                className={`
          absolute -bottom-1 h-[2px] bg-gray-700 transition-all duration-300
          ${isActive ? "w-1/2" : "w-0 group-hover:w-1/2"}
        `}
              ></span>
            </div>
          )}
        </NavLink>
        <NavLink to="/about">
          {({ isActive }) => (
            <div className="relative flex flex-col items-center gap-1 group">
              <p>ABOUT</p>

              <span
                className={`
          absolute -bottom-1 h-[2px] bg-gray-700 transition-all duration-300
          ${isActive ? "w-1/2" : "w-0 group-hover:w-1/2"}
        `}
              ></span>
            </div>
          )}
        </NavLink>
        <NavLink to="/contact">
          {({ isActive }) => (
            <div className="relative flex flex-col items-center gap-1 group">
              <p>CONTACT</p>

              <span
                className={`
          absolute -bottom-1 h-[2px] bg-gray-700 transition-all duration-300
          ${isActive ? "w-1/2" : "w-0 group-hover:w-1/2"}
        `}
              ></span>
            </div>
          )}
        </NavLink>
      </ul>

      <div className="flex items-center gap-6">
        <img src={assets.search_icon} className="w-5 cursor-pointer" alt="" />

        <div className="group relative">
          <img
            src={assets.profile_icon}
            className="w-5 cursor-pointer"
            alt=""
          />

          <div className="group-hover:block hidden absolute dropdown right right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500  rounded">
              <p className="cursor-pointer hover:text-black">My profile</p>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>
        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} className="w-5 min-w-5" alt="" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            0
          </p>
        </Link>
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          className="sm:hidden w-5 cursor-pointer"
          alt=""
        />
      </div>

      {/*sidebar for small screens*/}

      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? "w-full" : "w-0"}`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-3 cursor-pointer"
          >
            <img className="h-4 rotate-180" src={assets.dropdown_icon} alt="" />
            <p>Back</p>
          </div>
          <NavLink
            onClick={() => setVisible(false)}
            to="/"
            className="py-2 pl-6 border"
          >
            HOME
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            to="/collection"
            className="py-2 pl-6 border"
          >
            COLLECTION
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            to="/about"
            className="py-2 pl-6 border"
          >
            ABOUT
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            to="/contact"
            className="py-2 pl-6 border"
          >
            CONTACT
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
