import React from "react";
import Nav from "./Nav";
import { Link, Outlet } from "react-router-dom";
// import macBook from './images/macbook.jpg';

const HeroSection = () => {
  return (
    <div className="sm:flex justify-around items-center bg-black text-white p-8">
      <div>
        <h1 className="text-4xl mb-4">MacBook 14 Pro</h1>
        <p className="mb-4 text-gray-300">Supercharged by M2 pro or M2 max, macbook pro takes its power and efficiency further than ever. it delivers exceptional performance wether its plugged in or not and now has even longer battery life.</p>
        <div className="py-4">
          <Link to='/ReadMore' className="py-2 px-4 border border-gray-200 rounded-md mx-2">Read more</Link>
          <Link to='/Cart' className="py-2 px-4 border bg-white text-black rounded-md mx-2">Add to cart</Link>
        </div>
      </div>
      <div>
        <img src="./images/macbook.jpg"  alt="MacBook" className=""/>
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <>
      <header className="bg-zinc-950 text-white sticky top-0 flex-wrap z-20 mx-auto flex items-center justify-between border-b border-gray-200 px-10 p-6 text-lg">
        <h1 className="font-bold border border-gray-300 rounded-tr-md rounded-bl-md p-1">PASCAL</h1>
        <Nav />
      </header>
      <HeroSection />
      <Outlet />
    </>
  );
};

export default Header;
