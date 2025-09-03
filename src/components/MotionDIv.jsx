import { motion } from "motion/react";
import React from "react";

const MotionDiv = ({ src, pos }) => {
  return (
    <motion.div
      animate={{ y: -pos + `%` }}
      transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
      className="w-full overflow-hidden h-[101%]"
    >
      <video src={src} alt="" autoPlay muted loop playsInline />
    </motion.div>
  );
};

export default MotionDiv;
