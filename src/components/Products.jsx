import React, { useState } from "react";
import Product from "./Product";
import { motion } from "motion/react";
import MotionDiv from "./motionDIv";

const Products = () => {
  const [prodData, setProdData] = useState([
    {
      title: "Arqitel",
      imgURL:
        "https://res.cloudinary.com/dh0qpc7jl/video/upload/v1756751635/1_nxs2v4.webm",
      description:
        "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
      button: ["Get Arqi", "Get Started"],
    },
    {
      title: "TTR",
      imgURL:
        "https://res.cloudinary.com/dh0qpc7jl/video/upload/v1756751634/2_enxrhs.webm",
      description:
        "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
      button: ["Get TTR"],
    },
    {
      title: "YIR 2022",
      imgURL:
        "https://res.cloudinary.com/dh0qpc7jl/video/upload/v1756751637/3_ewkbjp.webm",
      description:
        "Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate.",
      button: ["Get YIR", "Case Study"],
    },
    {
      title: "Yahoo!",
      imgURL:
        "https://res.cloudinary.com/dh0qpc7jl/video/upload/v1756751633/4_tqkcc1.webm",
      description:
        "We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.",
      button: ["Get Yahoo!"],
    },
  ]);
  const [pos, setPos] = useState(0);

  const mover = (val) => {
    console.log(val);

    setPos(val * 100);
  };

  return (
    <div className="my-20 relative">
      {prodData.map((elem, index) => {
        return <Product key={index} elem={elem} index={index} mover={mover} />;
      })}
      <div className="w-full h-full absolute top-0 pointer-events-none">
        <motion.div
          initial={{ y: pos }}
          animate={{ y: pos + `%` }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
          className="window absolute w-[500px] h-1/4 left-1/4 overflow-hidden"
        >
          {prodData.map((elem, index) => (
            <MotionDiv key={index} src={elem.imgURL} pos={pos} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Products;
