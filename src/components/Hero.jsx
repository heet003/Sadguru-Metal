/* eslint-disable */
import React from "react";
import { motion } from "framer-motion";
import { slideIn, fadeIn } from "../utlis/animations";

const Hero = () => {
  return (
    <div className="min-h-screen w-full hero-section">
      <motion.section
        className="flex flex-col lg:flex-row items-center justify-between p-8 gap-10 lg:p-24 bg-mutedGreen"
        whileInView="show"
        initial="hidden"
        variants={fadeIn("down", "spring", 0.5, 1)}
      >
        <motion.div
          className="max-w-xl text-center lg:text-left"
          whileInView="show"
          initial="hidden"
          variants={slideIn("left", "spring", 0.2, 1)}
        >
          <p className="text-gray-900 uppercase mb-4 tracking-wider text-base lg:text-lg">
            The Future of Metal
          </p>
          <h1 className="text-3xl lg:text-5xl font-bold text-darkSlateGray mb-6">
            Forging Metal Solutions for a New Era
          </h1>
          <motion.a
            className="px-6 py-3 mt-6 bg-limeGreen text-darkSlateGray rounded-full shadow-lg hover:bg-mutedGreen hover:text-lightYellow transition duration-300 cursor-pointer"
            href="/products"
            variants={fadeIn("up", "tween", 0.5, 0.5)}
            whileInView="show"
          >
            Explore Products
          </motion.a>
        </motion.div>

        <motion.div
          className="block lg:hidden xl:block"
          whileInView="show"
          initial="hidden"
          variants={fadeIn("left", "tween", 0.5, 1)}
        >
          <img
            src="./metal/5.png"
            alt="Metal Product"
            className="w-full xl:w-[35rem] h-auto rounded-lg"
          />
        </motion.div>
      </motion.section>
    </div>
  );
};

export default Hero;
