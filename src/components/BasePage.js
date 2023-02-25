import React from "react";
import Navbar from "./Navbar";

const BasePage = (props) => {
  return (
    <>
      <Navbar location={props.location} />
      {props.children}
    </>
  );
};

export default BasePage;
