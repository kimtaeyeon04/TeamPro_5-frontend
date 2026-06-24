import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./footer.jsx";

const LayOut = () => {
  return (
    <>
      <Header />
      <div className="pt-[10vh] pb-[10vh]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default LayOut;
