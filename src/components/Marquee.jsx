import { motion } from "motion/react";
import { div } from "motion/react-client";
import React from "react";

const Marquee = ({ images, direction }) => {
  return (
    <div className="flex">
      <motion.div
        initial={{ x: direction ? "-100%" : "0" }}
        animate={{ x: direction ? "0" : "-100%" }}
        transition={{ ease: "linear", duration: 15, repeat: Infinity }}
        className="flex gap-20 shrink-0"
      >
        {images.map((elem, index) => (
          <img key={index} className="w-28" src={elem} alt={`logo-${index}`} />
        ))}
      </motion.div>{" "}
      <motion.div
        initial={{ x: direction ? "-100%" : "0" }}
        animate={{ x: direction ? "0" : "-100%" }}
        transition={{ ease: "linear", duration: 15, repeat: Infinity }}
        className="flex gap-20 shrink-0"
      >
        {images.map((elem, index) => (
          <img key={index} className="w-28" src={elem} alt={`logo-${index}`} />
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
