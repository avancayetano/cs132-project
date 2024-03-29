import React from "react";
import { Link, navigate } from "gatsby";

import logo from "../images/logo circle.png";

const Navbar = (props) => {
  const tabs = [
    {
      label: "Overview",
      link: "/",
    },
    {
      label: "Problem",
      link: "/problem",
    },
    {
      label: "Collection",
      link: "/collection",
    },
    {
      label: "Exploration",
      link: "/exploration",
    },
    {
      label: "Analysis",
      link: "/analysis",
    },
    {
      label: "Conclusion",
      link: "/conclusion",
    },
    {
      label: "About",
      link: "/about",
    },
  ];

  return (
    <nav className="navbar bg-base-100 sticky top-0 border z-10 border-b-2 border-x-0 mb-8">
      <div className="navbar-start">
        <label
          htmlFor="my-drawer"
          className="btn btn-ghost drawer-button hidden"
        >
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
        </label>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          <img src={logo} className="h-6 mr-1 sm:h-9" alt="Logo" />
          Chismisinfo
        </Link>
      </div>
      <div className="navbar-center">
        <ul className="menu menu-horizontal px-1">
          {tabs.map((tab) => (
            <li key={tab.label}>
              <div
                onClick={() => {
                  window.scrollTo({ top: 0 });
                  navigate(tab.link);
                }}
                className={
                  (props.page === tab.label
                    ? "btn btn-primary text-white "
                    : "") + "font-semibold"
                }
              >
                {tab.label}
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end"></div>
    </nav>
  );
};

export default Navbar;
