import React from "react";
import Navbar from "./Navbar";

const BasePage = (props) => {
  return (
    <>
      <Navbar page={props.page} />
      {props.children}
    </>
  );
};

export default BasePage;
