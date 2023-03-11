import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
const BasePage = (props) => {
  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <Navbar page={props.page} />
        <div className="relative mb-16">{props.children}</div>
        <Footer />
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-base-100 text-base-content">
          <li>
            <div>Sidebar Item 1</div>
          </li>
          <li>
            <div>Sidebar Item 2</div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BasePage;
