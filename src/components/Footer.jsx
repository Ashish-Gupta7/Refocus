import React from "react";
import FooterBox from "./FooterBox";

const smallBox = {
  title: "Up Next: News",
  heading: "Insights and behind the scenes",
  lastLine: "Explore what drives our team.",
  smallBox: true,
};

const bigBox = {
  title: "Get In Touch",
  heading: "Let's get to it, together.",
  lastLine: "Start a Project",
  bigBox: true,
};

const Footer = () => {
  return (
    <div className="px-28 w-full">
      <div className="pb-8 pt-48 w-full">
        <div className="flex justify-between gap-1 w-full h-[480px]">
          <FooterBox box={smallBox} />
          <FooterBox box={bigBox} />
        </div>
        <div className="flex justify-between items-start mt-24">
          <div className="text-[200px] font-semibold leading-none">
            refocus.
          </div>
          <div className="flex flex-col items-end mt-10 text-lg font-light">
            <div className="flex gap-20">
              <div className="flex flex-col gap-6 text-gray-500/80 tracking-wider">
                <h2 className="">Socials</h2>
                <div className="flex flex-col gap-1">
                  {[
                    { link: "#", btn: "Instagram" },
                    { link: "#", btn: "Twitter" },
                    { link: "#", btn: "LinkedIn" },
                  ].map((elem, index) => (
                    <a key={index} href={elem.link}>
                      {elem.btn}
                    </a>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-6 tracking-wider">
                <h2 className="text-gray-500/80">Sitemaps</h2>
                <div className="flex flex-col gap-1">
                  {[
                    { link: "#", btn: "Home" },
                    { link: "#", btn: "Work" },
                    { link: "#", btn: "Carrers" },
                    { link: "#", btn: "Contact" },
                  ].map((elem, index) => (
                    <a key={index} href={elem.link}>
                      {elem.btn}
                    </a>
                  ))}
                </div>
              </div>
              <div>
                <p className="w-40 text-right leading-5">
                  Refokus is pioneering digital agency driven by design and
                  empowered by technology.
                </p>
              </div>
            </div>
            <button className="px-4 py-1 bg-blue-600">
              <img
                className="w-16"
                src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
                alt=""
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
