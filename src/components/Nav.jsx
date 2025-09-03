import React from "react";
import Button from "./Button";

const Nav = () => {
  return (
    <div className="px-[120px] py-6">
      <nav className="flex items-center justify-between">
        <div className="flex items-center gap-20">
          <div className="logo">
            <img
              src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
              alt=""
            />
          </div>
          <div className="icons flex items-center gap-14">
            {["Home", "Work", "Culture", "line", "News"].map((elem, index) => {
              return elem === "line" ? (
                <div
                  key={index}
                  className="h-[26px] w-[1.5px] opacity-25 bg-white"
                ></div>
              ) : (
                <a key={index} href="">
                  {elem === "Work" ? (
                    <div className="flex items-center gap-1">
                      <span
                        className="h-2 w-2 bg-emerald-500 rounded-full"
                        style={{ boxShadow: "rgb(0, 255, 25) 0px 0px 0.25em" }}
                      ></span>
                      <span>{elem}</span>
                    </div>
                  ) : (
                    elem
                  )}
                </a>
              );
            })}
          </div>
        </div>
        <Button />
      </nav>
      <div className="h-[1px] bg-white opacity-25 mt-6"></div>
    </div>
  );
};

export default Nav;
