import React, { useState } from "react";
import { NavLink, } from "react-router-dom";
import logo from "../asset/Dhaval file/logo.jpeg";
import {IoMenu} from "react-icons/io5"

const Navbar = () => {

  const[isMenuOpen , setIsMenuOpen] = useState(false);


  // function to control the humburger menu using usestate hook
  function humMenu(){

    setIsMenuOpen(!isMenuOpen);

  }


  // function for scrolling to the particulat part 

  const scrollToSection = (id) =>  {

    const element = document.getElementById(id);

    if(element){
      element.scrollIntoView({behavior:'smooth'});
    }

  };


  //function to handle menu and scroll both at same time 

  const handleMenuandScroll = (id) => {
    humMenu()
    scrollToSection(id)
    
    
  }



  return (
    <div className=" relative">

      {/* Navbar Logo  */}
      <nav className="flex justify-between w-[88%] mx-auto  mt-8 items-center  ">
        <NavLink to="/">
          <div >
            <img src={logo} alt="logo"  className="  max-w-max w-20 h-12"></img>
          </div>
        </NavLink>

        {/* humburger Menu icon for mobile veiw */}

        <div
        ><IoMenu onClick={humMenu} className="bg-[#46BBCD] text-white rounded-md text-4xl px-1  block lg:hidden mr-6"/></div>

         {/* Narbar option for desktop veiw  */}

        <div className="sm:flex gap-x-12   font-josefin bg-[#46BBCD] text-white text-center justify-center items-center py-3 px-16 rounded-lg  hidden">
          <NavLink to="/">
            <div  onClick={() => {scrollToSection("home")}} className=" font-semibold text-lg  hover-underline-animation">Home</div>
          </NavLink>

          <NavLink to="/products"  onClick={() => {scrollToSection("products")}}>
            <button className=" font-semibold  text-lg hover-underline-animation">
            Product</button>
          </NavLink>

          <NavLink to="/">
            <div  onClick={() => {scrollToSection("about")}} className=" font-semibold text-lg hover-underline-animation ">
            About Us</div>
          </NavLink>

          <NavLink to="/">
            <div className="font-semibold text-lg hover-underline-animation  ">Contact Us</div>
          </NavLink>


          
        </div>

        {/* humburger menu code for mobile veiw */}

        <div className={` absolute -top-[100%] z-10 font-josefin text-white bg-opacity-85 h-[120vh] w-[80vw] flex flex-col   bg-[#46BBCD] pt-8 gap-4 pl-6 transition-transform transform ${isMenuOpen ? 'right-[0]' : '-right-[100%]'} lg:hidden`}>
          <NavLink to="/">
            <div className=" font-semibold text-xl  hover-underline-animation" onClick={() => (handleMenuandScroll("home"))}>Home</div>
          </NavLink>

          <NavLink to="/products">
            <button className=" font-semibold  text-xl hover-underline-animation"   onClick={() => (handleMenuandScroll("products"))}>Product</button>
          </NavLink>

          <NavLink to="/">
            <div className=" font-semibold  text-xl hover-underline-animation " onClick={() => (handleMenuandScroll("about"))}>
            About Us</div>
          </NavLink>

          <NavLink to="/">
            <div className="font-semibold text-xl hover-underline-animation  " onClick={() => (handleMenuandScroll("contact"))} >Contact Us</div>
          </NavLink>


          
        </div>

        

      </nav>
    </div>
    
  );
};

export default Navbar;
