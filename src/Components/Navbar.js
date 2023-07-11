import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="w-[100%] h-[10vh] bg-black ">
      <ul className="lg:flex justify-center md:block hidden gap-5 text-white pt-5">
        <li className="hover:border-b-2 text-white">
          <Link to="/home">Home</Link>
        </li>
        <li className="hover:border-b-2 text-white">
          <Link to="/about">About</Link>
        </li>
        <li className="hover:border-b-2 text-white">
          <Link to="/services">Services</Link>
        </li>
        <li className="hover:border-b-2 text-white">
          <Link to="/blogs">Blogs</Link>
        </li>
        <li className="hover:border-b-2 text-white">
          <Link to="/privacy">Privacy</Link>
        </li>
        <li className="hover:border-b-2 text-white">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
