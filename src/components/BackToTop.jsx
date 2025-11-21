/* eslint-disable */
import React from "react";

const BackToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className="bg-limeGreen text-darkSlateGray p-3 text-3xl rounded-full hover:bg-lightYellow transition duration-300 ease-in-out
      fixed bottom-8 right-8 z-10"
      aria-label="Back to top"
    >
      ↑
    </button>
  );
};

export default BackToTop;
