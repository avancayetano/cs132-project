import React from "react";
import Navbar from "./Navbar";

const BasePage = (props) => {
  return (
    <>
      <Navbar page={props.page} />

      <div className="relative top-16 pb-16">{props.children}</div>
    </>
  );
};

export default BasePage;
