/* eslint-disable */
import React from "react";
import { motion } from "framer-motion";
import {
  textVariant,
  fadeIn,
  zoomIn,
  staggerContainer,
} from "../utlis/animations"; // Adjust the path as necessary

const ProductFeatures = () => {
  return (
    <motion.section
      variants={staggerContainer(0.3, 0.1)}
      initial="hidden"
      whileInView="show"
      className="w-full my-10 px-4 py-12 md:px-8 md:py-16 lg:px-20 lg:py-20 bg-mutedGreen"
    >
      <motion.h2
        variants={textVariant(0.5)}
        className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-10 text-darkSlateGray"
      >
        Make Your Workflow Smarter, Simpler, and More Beautiful
      </motion.h2>
      <div className="flex flex-col md:flex-row justify-center items-center space-y-10 md:space-y-0 md:space-x-10">
        {/* Feature 1 */}
        <motion.div
          variants={fadeIn("up", "spring", 0.5, 0.75)}
          className="flex flex-col items-center text-center space-y-4 p-6 rounded-lg"
        >
          <motion.img
            src="./metal/20.png"
            alt="AI-powered software"
            className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 object-contain bg-slate-50 rounded-2xl"
            variants={zoomIn(0.5, 0.5)}
          />
          <motion.p
            variants={textVariant(1)}
            className="text-base sm:text-lg md:text-xl font-medium text-darkSlateGray"
          >
            AI-powered software that gets smarter over time
          </motion.p>
        </motion.div>

        {/* Feature 2 */}
        <motion.div
          variants={fadeIn("up", "spring", 0.7, 0.75)}
          className="flex flex-col items-center text-center space-y-4 p-6 rounded-lg"
        >
          <motion.img
            src="./metal/22.png"
            alt="Manage your fleet"
            className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 object-contain bg-slate-50 rounded-2xl"
            variants={zoomIn(0.7, 0.5)}
          />
          <motion.p
            variants={textVariant(1.2)}
            className="text-base sm:text-lg md:text-xl font-medium text-darkSlateGray"
          >
            Couldn't be easier to deploy and manage your fleet
          </motion.p>
        </motion.div>

        {/* Feature 3 */}
        <motion.div
          variants={fadeIn("up", "spring", 0.9, 0.75)}
          className="flex flex-col items-center text-center space-y-4 p-6 rounded-lg"
        >
          <motion.img
            src="./metal/21.png"
            alt="Flexible scalable solutions"
            className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 object-contain bg-slate-50 rounded-2xl"
            variants={zoomIn(0.9, 0.5)}
          />
          <motion.p
            variants={textVariant(1.5)}
            className="text-base sm:text-lg md:text-xl font-medium text-darkSlateGray"
          >
            Flexible, scalable solutions that fit every space
          </motion.p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ProductFeatures;
