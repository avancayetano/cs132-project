import React from "react";
import Navbar from "./Navbar";
import BasePageSidebar from "./BasePageSidebar";

const BasePage = (props) => {
  return (
    <>
      {/* <Navbar location={props.location} /> */}
      <BasePageSidebar />
      {/* {props.children} */}
    </>
  );
};

export default BasePage;
