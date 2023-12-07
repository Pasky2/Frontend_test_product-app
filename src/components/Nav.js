import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X  } from "lucide-react";

const NavLinks = () => {
  return (
    <>
      <NavLink to="/dashboard" className=' hover:border-b-2 hover:text-gray-400 decoration-solid'>About</NavLink>
      <NavLink to="/Blog" className=' hover:border-b-2 hover:text-gray-400 decoration-solid'>Blog</NavLink>
      <NavLink to="/Products" className=' hover:border-b-2 hover:text-gray-400 decoration-solid'>Products</NavLink>
      <NavLink to="/Products" className=' hover:border-b-2 hover:text-gray-400 decoration-solid'>Categories</NavLink>

    </>
  );
};


const Nav = () => {
  const [ isOpen, setIsOpen ] = useState(false);

  const toggleNavBar = () => {
    setIsOpen(!isOpen);
  }


  return (
    <>
    <nav className=" flex w-1/3 justify-end">
      <div className="hidden md:flex justify-evenly w-full">
        <NavLinks />
      </div>

      <div className="md:hidden">
        <button onClick={toggleNavBar}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
    </nav>

    {isOpen && (
      <div className="flex flex-col items-center basis-full">
        <NavLinks />
      </div>
    )}
    </>
    
  );
};

export default Nav;
