import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
const BasePage = (props) => {
  return (
    <>
      <Navbar page={props.page} />
      <div className="relative top-20 mb-32">{props.children}</div>
      <Footer />
    </>
  );
};

export default BasePage;
