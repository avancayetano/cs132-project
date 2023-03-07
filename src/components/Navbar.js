import React, { useState, useEffect } from "react";
import { Link } from "gatsby";

import logo from "../images/logo.png";

const Navbar = (props) => {
  const tabs = [
    {
      label: "Overview",
      link: "/",
    },
    {
      label: "Data",
      link: "/data",
    },
    {
      label: "Methods",
      link: "/methods",
    },
    {
      label: "Results",
      link: "/results",
    },
    {
      label: "Team",
      link: "/team",
    },
  ];

  return (
    <div className="navbar bg-base-100 fixed border z-50">
      <div className="navbar-start">
        <div className="flex-none">
          <button className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          <img src={logo} className="h-6 mr-1 sm:h-9 rounded-full" alt="Logo" />
          Chismisinfo
        </Link>
      </div>
      <div className="navbar-center">
        <ul className="menu menu-horizontal px-1">
          {tabs.map((tab) => (
            <li key={tab.label}>
              <Link
                to={tab.link}
                className={
                  (props.page === tab.label
                    ? "text-blue-700 "
                    : "text-gray-700 ") + "font-medium"
                }
              >
                {tab.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end"></div>
    </div>
  );
};

export default Navbar;
