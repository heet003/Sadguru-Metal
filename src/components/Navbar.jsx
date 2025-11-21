/* eslint-disable */
import React, { useState } from "react";
import { motion } from "framer-motion";
import { slideIn } from "../utlis/animations";
import { Link } from "react-router-dom";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="h-auto w-[100%] flex flex-wrap justify-between items-center py-4 px-8 shadow-lg">
      <motion.div
        className="flex items-center"
        whileInView="show"
        initial="hidden"
        variants={slideIn("left", "spring", 0.2, 0.5)}
      >
        <img
          src="./metal/15.png"
          alt="Saduguru Metal Logo"
          className="h-12 mr-2 rounded-lg"
        />
        <Link to={`/`}>
          <span className="text-xl lg:text-2xl sm:text-xl font-semibold">
            Saduguru Metal
          </span>
        </Link>
      </motion.div>

      {/* Hamburger Icon for Mobile */}
      <div
        className="block lg:hidden cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          className="w-8 h-8 text-darkSlateGray"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </div>

      {/* Desktop Menu */}
      <motion.ul
        className={`lg:flex lg:space-x-6 ${
          isOpen ? "flex text-white" : "hidden"
        } absolute lg:static top-16 left-0 w-full lg:w-auto lg:top-auto lg:left-auto bg-darkSlateGray lg:bg-transparent`}
        whileInView="show"
        initial="hidden"
        variants={slideIn("right", "tween", 0.2, 0.5)}
      >
        <li className="hover:text-limeGreen transition duration-300 p-4 lg:p-0">
          <a href="#about">About</a>
        </li>
        <li className="hover:text-limeGreen transition duration-300 p-4 lg:p-0">
          <a href="/products">Shop</a>
        </li>
      </motion.ul>
    </nav>
  );
};

export default Navbar;
