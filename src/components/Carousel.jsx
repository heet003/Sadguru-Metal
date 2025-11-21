/*eslint-disable*/
import React from "react";
import { motion } from "framer-motion";
import { images } from "../utlis/data"; // Import your images array
import { fadeIn, slideIn, staggerContainer } from "../utlis/animations"; // Import the variants you created

const Carousel = () => {
  return (
    <motion.div
      className="carousel-container"
      variants={slideIn("right", "tween", 0.3, 1)}
      initial="hidden"
      whileInView="show"
    >
      <motion.div className="carousel">
        {images.map((image, index) => (
          <motion.div key={index} className="carousel-item p-5">
            <img src={image} alt={`carousel ${index}`} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Carousel;
