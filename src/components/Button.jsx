import React from "react";
import { IoIosReturnRight } from "react-icons/io";

const Button = ({ btn = ["Get Started"] }) => {
  return btn.map((elem, index) => (
    <button
      key={index}
      className="flex items-center justify-center gap-1 rounded-full px-4 py-2 bg-white text-sm text-black"
    >
      <span>{elem}</span>
      <IoIosReturnRight className="text-lg mt-0.5" />
    </button>
  ));
};

export default Button;
