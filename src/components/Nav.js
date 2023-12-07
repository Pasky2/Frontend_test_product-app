import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X  } from "lucide-react";

const NavLinks = () => {
  return (
    <>
      <NavLink to="/dashboard">About</NavLink>
      <NavLink to="/Blog">Blog</NavLink>
      <NavLink to="/Products">Products</NavLink>
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
      <div className="hidden md:flex justify-around w-full">
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
