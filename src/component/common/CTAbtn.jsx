import React from "react";
import { NavLink } from "react-router-dom";

const CTAbtn = ({ children, linkto }) => {
  return (
    <NavLink to={linkto}>
      <div
        className={`w-[200px] text-center capitalize text-[15px] sm:text-[16px] px-6 py-3 rounded-md font-bold shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)]
         bg-gradient-to-r from-fuchsia-500 to-cyan-500  text-black 
          hover:scale-95 transition-all duration-200 hover:shadow-none
        `}
      >
        {children}
      </div>
    </NavLink>
  );
};

export default CTAbtn;
