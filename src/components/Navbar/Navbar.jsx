import React from "react";
import { Button } from "../../ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full bg-white flex items-center justify-between px-16 py-6 border-b border-[#0a090626]">
      
      {/* Logo */}
      <div className="text-3xl font-bold italic text-[#0a0906]">
        <Link to="/">Logo</Link>
      </div>

      {/* Center Menu */}
      <ul className="flex items-center gap-12 text-[#0a0906]">
        {/* <li><Link to="/about" className="hover:text-black/70">About Us</Link></li> */}
        <li><Link to="/products" className="hover:text-black/70">Products</Link></li>
        <li><Link to="/catalog" className="hover:text-black/70">Catalog</Link></li>
        <li><Link to="/contact" className="hover:text-black/70">Contact Us</Link></li>

        {/* <li className="cursor-pointer hover:text-black/70 flex items-center gap-1">
          Resources
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#0a0906"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mt-0.5"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </li> */}
      </ul>

      {/* <div className="flex items-center gap-4">
        <Button
          variant="outline"
          className="
            bg-white 
            px-6 py-2.5 
            border border-[#0a0906]
            shadow-[0px_2px_2px_#0a090626,inset_0px_-5px_0px_#0a090626,inset_0px_4px_0px_#ffffff33]
            rounded-none
            hover:bg-gray-100
            transition-colors
          "
        >
          Sign in
        </Button>
        <Button
          className="
            bg-[#cedee7] 
            px-6 py-2.5 
            border border-[#0a0906]
            shadow-[0px_2px_2px_#0a090626,inset_0px_-5px_0px_#0a090626,inset_0px_4px_0px_#ffffff33]
            rounded-none
            hover:bg-[#b8d4e0]
            transition-colors
          "
        >
          Register
        </Button>
      </div> */}

    </nav>
  );
};

export default Navbar;