import React from "react";

const brandData = [
  {
    img: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd7cf6b3689fb_css-design-awards-logos-id1L9L8Yvp%201.svg",
    number: 52,
  },
  {
    img: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63d6e83420934a94d642103b_NCC2021_LogoLockup%201.svg",
    number: 2,
  },
  {
    img: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd75d563689fd_Awwards-logotype-2018%201.svg",
    number: 15,
  },
];

const repeatCount = 2;

const Brands = () => {
  return (
    <div className="flex items-center mt-20">
      {Array.from({ length: repeatCount }).map((_, repeatIndex) =>
        brandData.map((elem, index) => (
          <div
            key={`${repeatIndex}-${index}`}
            className="flex w-[calc(100%/6)] items-center justify-between px-6 border border-white/25 py-4"
          >
            <img src={elem.img} className="h-7" alt="" />
            <span className="text-lg">{elem.number}</span>
          </div>
        ))
      )}
    </div>
  );
};

export default Brands;
