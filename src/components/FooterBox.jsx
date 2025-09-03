import { motion } from "motion/react";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const FooterBox = ({ box }) => {
  return (
    <motion.div
      whileHover={{
        backgroundColor: box.smallBox ? "" : "#8b5cf6",
        padding: "25px",
      }}
      className={`${box.smallBox ? "w-1/3" : "w-2/3"}
      } flex flex-col justify-between bg-[#27272a] rounded-md p-5`}
    >
      <div className="flex flex-col gap-6">
        <div className="flex justify-between">
          <h3 className="text-lg font-semibold">{box.title}</h3>
          <FaArrowRightLong />
        </div>
        <div className="text-[32px] leading-8">{box.heading}</div>
      </div>
      <div className="flex flex-col gap-6">
        <div
          className={`${box.bigBox ? "text-6xl font-semibold" : "text-base"}`}
        >
          {box.lastLine}
        </div>
        {box.bigBox ? (
          <button className="w-max px-4 py-2 text-lg rounded-full border cursor-pointer">
            Contact Us
          </button>
        ) : (
          ""
        )}
      </div>
    </motion.div>
  );
};

export default FooterBox;
