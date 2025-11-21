/* eslint-disable */
import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, slideIn } from "../utlis/animations"; // adjust path accordingly
import Carousel from "./Carousel";

const ProductShowcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const products = [
    {
      name: "Owl Bar",
      description: "Capture every angle",
      price: "$1,799",
      image: "./metal/12.png",
    },
    {
      name: "Meeting Owl 4+",
      description: "Enhanced with 4K UHD video",
      price: "$1,999",
      image: "./metal/10.png",
    },
    {
      name: "Whiteboard Owl",
      description: "Real-time collaboration",
      price: "$599",
      image: "./metal/11.png",
    },
    {
      name: "Owl Pro",
      description: "Professional grade",
      price: "$2,499",
      image: "./metal/9.png",
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === products.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Split heading text into words
  const headingText =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores autem eaque.".split(
      " "
    );

  return (
    <div className="text-darkSlateGray w-full min-h-screen">
      <section className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        {/* Animate heading words one by one */}
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="show"
          variants={staggerContainer(0.05, 0.2)} // Stagger the appearance of each word
        >
          {headingText.map((word, index) => (
            <motion.span
              key={index}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold inline-block mr-2"
              variants={fadeIn("up", "tween", index * 0.1, 0.6)}
            >
              {word}
            </motion.span>
          ))}
        </motion.div>

        {/* Product carousel section */}
        <motion.div
          className="relative overflow-hidden"
          initial="hidden"
          whileInView="show"
          variants={staggerContainer(0.2, 0.3)} // Stagger each product image's animation
        >
          {/* <motion.div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {products.map((product, index) => (
              <motion.div
                key={index}
                className="p-4 sm:p-6 rounded-lg text-center flex-shrink-0 w-full sm:w-3/4 md:w-1/2 lg:w-1/3"
                variants={slideIn("up", "spring", 0.2, 1)} // Slide up images
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="mx-auto mb-4 w-full h-auto object-cover rounded-lg"
                />
                <h2 className="text-lg sm:text-xl font-semibold">
                  {product.description}
                </h2>
                <p className="text-base sm:text-lg mt-2">{product.name}</p>
                <p className="text-base sm:text-lg">{product.price}</p>
              </motion.div>
            ))}
          </motion.div> */}

          <Carousel />

          {/* Navigation arrows */}
          {/* <div className="absolute inset-y-0 left-0 flex items-center pl-3">
            <button
              onClick={handlePrev}
              className="text-darkSlateGray text-2xl bg-white rounded-full p-2 shadow-lg"
            >
              &larr;
            </button>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
            <button
              onClick={handleNext}
              className="text-darkSlateGray text-2xl bg-white rounded-full p-2 shadow-lg"
            >
              &rarr;
            </button>
          </div> */}
        </motion.div>

        <div className="text-center mt-8">
          <motion.a
            className="bg-limeGreen text-darkSlateGray py-2 px-6 rounded-full text-base sm:text-lg cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/products"
            variants={fadeIn("up", "tween", 0.3, 0.5)}
          >
            Shop All Products
          </motion.a>
        </div>
      </section>
    </div>
  );
};

export default ProductShowcase;
