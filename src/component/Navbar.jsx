import React from "react";
import {  NavLink } from "react-router-dom";


const Navbar = () => {
    return(
        <div>
            <nav className="flex justify-between mt-5 w-[80%] mx-auto">

                <NavLink to='/'>
                <div>
                    <img src="../logo.jpeg" width={90} height={60}></img>
                
                </div>

                </NavLink>

                <div className="flex gap-x-10">
                    <NavLink to='/'>
                        <div className=" font-semibold text-xl ">
                             Home 
                        </div>
                    </NavLink>

                    <NavLink to='/'>
                        <div className=" font-semibold text-xl ">
                             Product 
                        </div>
                    </NavLink>


                    <NavLink to='/'>
                        <div className=" font-semibold  text-xl ">
                             About Us
                        </div>
                    </NavLink>

                    <NavLink to='/'>
                        <div className="  font-semibold text-xl ">
                             Contact Us  
                        </div>
                    </NavLink>

                </div>
                

            </nav>
            

        </div>
    )
}

export default Navbar;