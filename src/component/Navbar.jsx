import React from "react";
import { NavLink, } from "react-router-dom";
import logo from "../asset/Dhaval file/logo.jpeg";

const Navbar = () => {
  return (
    <div className=" relative">
      <nav className="flex justify-between w-[88%] mx-auto mt-8 ">
        <NavLink to="/">
          <div>
            <img src={logo} alt="logo" width={90} height={60}></img>
          </div>
        </NavLink>

        <div className="flex gap-x-12 mr-20">
          <NavLink to="/">
            <div className=" font-medium text-lg  hover-underline-animation">Home</div>
          </NavLink>

          <NavLink to="/products">
            <button className=" font-medium  text-lg hover-underline-animation">
            Product</button>
          </NavLink>

          <NavLink to="/">
            <div className=" font-medium text-lg hover-underline-animation">
            About Us</div>
          </NavLink>

          <NavLink to="/">
            <div className="font-semibold text-lg hover-underline-animation  ">Contact Us</div>
          </NavLink>
        </div>
      </nav>
    </div>
    
  );
};

export default Navbar;
