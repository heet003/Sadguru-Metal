/* eslint-disable */
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { fadeIn, slideIn, staggerContainer, zoomIn } from "../utlis/animations";

const Footer = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setMousePosition({
      x: 1 * event.clientX,
      y: 1 * event.clientY,
    });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <motion.footer
      className="relative bg-black text-lightYellow p-6 sm:p-8 md:p-12 overflow-hidden"
      whileInView="show"
      initial="hidden"
      variants={staggerContainer(0.2, 0.5)}
    >
      <div
        style={{
          left: mousePosition.x * 0.1,
          top: mousePosition.y * 0.1,
          transform: "translate(-50%, -50%)",
        }}
        className="absolute w-96 h-96 bg-limeGreen rounded-full filter blur-3xl opacity-35"
      ></div>

      <motion.div
        className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 relative z-10"
        whileInView="show"
        initial="hidden"
        variants={fadeIn("up", "tween", 0.2, 0.8)}
      >
        <motion.div
          className="space-y-4 sm:space-y-6 text-center md:text-left"
          whileInView="show"
          initial="hidden"
          variants={fadeIn("left", "spring", 0.3, 1)}
        >
          <motion.div
            whileInView="show"
            initial="hidden"
            variants={slideIn("left", "spring", 0.3, 1)}
          >
            <span className="text-2xl sm:text-3xl font-bold">Sadguru Metal</span>
          </motion.div>
          <motion.div
            className="space-y-2 text-sm sm:text-base"
            whileInView="show"
            initial="hidden"
            variants={fadeIn("up", "tween", 0.4, 1)}
          >
            <p className="font-semibold">Contact Us:</p>
            <p>Phone: +91 9712134409</p>
            <p>Email: sadgurumetal45@gmail.com</p>
            <p>Address: Shree Hari Industrial, Rajkot, Gujarat, India</p>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex flex-col items-center space-y-4 sm:space-y-6"
          whileInView="show"
          initial="hidden"
          variants={fadeIn("up", "tween", 0.5, 1)}
        >
          <motion.p className="text-lg sm:text-xl font-semibold">Follow Us:</motion.p>

          <motion.div
            className="flex space-x-6 text-2xl"
            whileInView="show"
            initial="hidden"
            variants={staggerContainer(0.2, 0.5)}
          >
            <motion.a
              href="#"
              className="hover:text-limeGreen"
              whileInView="show"
              initial="hidden"
              variants={zoomIn(0.3, 0.5)}
            >
              <i className="fab fa-facebook"></i>
            </motion.a>
            <motion.a
              href="#"
              className="hover:text-limeGreen"
              whileInView="show"
              initial="hidden"
              variants={zoomIn(0.4, 0.5)}
            >
              <i className="fab fa-instagram"></i>
            </motion.a>
          </motion.div>

          <motion.div
            className="mt-4 text-sm sm:text-base space-x-4 sm:space-x-6 text-center"
            whileInView="show"
            initial="hidden"
            variants={slideIn("up", "spring", 0.6, 1)}
          >
            <a href="#" className="hover:text-limeGreen">
              Products
            </a>
            <a href="#" className="hover:text-limeGreen">
              About Us
            </a>
            <a href="#" className="hover:text-limeGreen">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-limeGreen">
              Terms of Service
            </a>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        className="mt-8 sm:mt-10 border-t border-lightYellow pt-4 sm:pt-6 flex justify-between items-center relative z-10"
        whileInView="show"
        initial="hidden"
        variants={slideIn("left", "tween", 0.5, 1)}
      ></motion.div>
      <motion.div
        className="text-sm sm:text-base text-center md:text-left relative z-10"
        whileInView="show"
        initial="hidden"
        variants={slideIn("right", "tween", 0.5, 1)}
      >
        <p className="text-mutedGreen">
          © 2024 Sadguru Metal. All rights reserved.
        </p>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
