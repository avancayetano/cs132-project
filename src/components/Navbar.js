import React, { useState } from "react";
import { Link } from "gatsby";

import logo from "../images/icon.png";

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
    <nav className="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 sticky w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <Link to="/" className="flex items-center">
          <img src={logo} className="h-6 mr-3 sm:h-9 rounded-full" alt="Logo" />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            CS 132
          </span>
        </Link>
        <div className="flex md:order-2"></div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-2 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {tabs.map((tab) => (
              <li key={tab.label}>
                <Link
                  to={tab.link}
                  className={
                    (props.location === tab.link
                      ? "text-blue-700 "
                      : "text-gray-700 ") +
                    "text-base block py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 "
                  }
                >
                  {tab.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
