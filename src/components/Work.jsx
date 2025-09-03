import React, { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "motion/react";

const Work = () => {
  const [workImages, setWorkImages] = useState([
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png",
      top: "50%",
      left: "50%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png",
      top: "40%",
      left: "58%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png",
      top: "47%",
      left: "48%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png",
      top: "51%",
      left: "56%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png",
      top: "58%",
      left: "48%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png",
      top: "70%",
      left: "58%",
      isActive: false,
    },
  ]);

  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const showImages = (arr) => {
      setWorkImages((prev) => {
        return prev.map((item, idx) =>
          arr.indexOf(idx) === -1
            ? { ...item, isActive: false }
            : { ...item, isActive: true }
        );
      });
    };

    switch (Math.floor(latest * 100)) {
      case 0:
        showImages([]);
        break;
      case 3:
        showImages([0]);
        break;
      case 4:
        showImages([0, 1]);
        break;
      case 5:
        showImages([0, 1, 2]);
        break;
      case 6:
        showImages([0, 1, 2, 3]);
        break;
      case 7:
        showImages([0, 1, 2, 3, 4]);
        break;
      case 8:
        showImages([0, 1, 2, 3, 4, 5]);
        break;
      default:
    }
  });

  return (
    <div className="w-full">
      <div className="relative max-w-screen-xl mx-auto text-center">
        <div className="text-[30vw] font-medium leading-none text-center">
          work
        </div>
        <div className="w-full h-full absolute top-0">
          {workImages.map((elem, index) => {
            return (
              elem.isActive && (
                <img
                  key={index}
                  className="absolute w-60 rounded-xl -translate-x-1/2 -translate-y-1/2"
                  style={{ top: elem.top, left: elem.left }}
                  src={elem.url}
                  alt=""
                />
              )
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Work;
