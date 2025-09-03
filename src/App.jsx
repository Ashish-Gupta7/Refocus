import React from "react";
import Nav from "./components/Nav";
import Work from "./components/Work";
import Brands from "./components/Brands";
import Products from "./components/Products";
import Marquees from "./components/Marquees";
import Footer from "./components/Footer";
import LocomotiveScroll from "locomotive-scroll";

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="main bg-[#18181b] min-h-screen text-white">
      <Nav />
      <Work />
      <Brands />
      <Products />
      <Marquees />
      <Footer />
    </div>
  );
};

export default App;
