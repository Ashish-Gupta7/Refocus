import React from "react";
import Button from "./Button";

const Product = ({ elem, index, mover }) => {
  return (
    <div onMouseEnter={() => mover(index)} className="w-full">
      <div className="flex px-28 py-24 items-center justify-between">
        <div className="title capitalize text-5xl font-medium">
          {elem.title}
        </div>
        <div className="description w-[400px] text-sm flex flex-col gap-10">
          <p>{elem.description}</p>
          <div className="flex items-center gap-4">
            <Button btn={elem.button} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
