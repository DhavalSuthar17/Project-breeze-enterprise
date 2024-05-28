import React from "react";
import {  NavLink } from "react-router-dom";


const Navbar = () => {
    return(
        <div>
            <nav className="flex justify-between">

                <NavLink to='/'>
                <div>
                    <img src="../logo.jpeg" width={90} height={60}></img>
                
                </div>

                </NavLink>

                <div className="flex gap-x-10">
                    <NavLink to='/'>
                        <div>
                             Home 
                        </div>
                    </NavLink>

                    <NavLink to='/'>
                        <div>
                             Product 
                        </div>
                    </NavLink>


                    <NavLink to='/'>
                        <div>
                             About Us
                        </div>
                    </NavLink>

                    <NavLink to='/'>
                        <div>
                             Contact Us  
                        </div>
                    </NavLink>

                </div>
                

            </nav>
            

        </div>
    )
}

export default Navbar;