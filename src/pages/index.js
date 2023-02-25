import React from "react";
import { Card, Button } from "flowbite-react";
import { Link } from "gatsby";

import BasePage from "../components/BasePage";
import logo from "../images/icon.png";

// The Overview page
const IndexPage = (props) => {
  return (
    <BasePage location={props.uri}>
      <div className="container mx-auto my-5 p-4 w-3/5 text-center">
        <h1 className="mb-4 text-6xl font-extrabold text-gray-800 dark:text-white">
          CS 132{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-700 from-sky-500">
            Data Science
          </span>{" "}
        </h1>
        <h1 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-700 dark:text-white">
          PH Twitter{" "}
          <span className="underline underline-offset-4 decoration-6 decoration-red-400 dark:decoration-red-600">
            Fake News
          </span>{" "}
          Analysis
        </h1>
      </div>

      <div className="container mx-auto my-3 p-4 grid grid-cols-3 gap-12 w-3/5">
        <div className="">
          <img src={logo} className="w-full rounded-full" alt="Logo" />
        </div>
        <div className="col-span-2">
          <h1 className="mb-4 text-5xl font-extrabold leading-none tracking-tight text-gray-800 dark:text-white">
            Group 21. Group Name.
          </h1>

          <p className="mb-5 text-lg text-gray-700 dark:text-gray-400 text-justify">
            We are data science students from University of the Philippines -
            Diliman. Imbued with love for the discipline and the nation, we aim
            to produce a rigorous study about disinformation in the Philippines
            by applying cutting-edge methods data science is offering today. We
            plan to investigate information from tweets generated in Twitter
            dating from 2020 to 2022.
          </p>
          <p className="mb-5 text-lg text-gray-700 dark:text-gray-400 text-justify">
            Paragraph about our topic... Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Fusce tincidunt odio eu neque tincidunt luctus.
            Aenean neque diam, lobortis ultricies tellus at, fringilla
            condimentum lacus. Integer leo urna, commodo at dictum non, iaculis
            eu turpis.
          </p>

          <Link to="/team" className="text-2xl text-blue-700 underline">
            Data Science Team
          </Link>
          <div className="my-2 text-lg text-gray-900 dark:text-gray-400">
            <li>Harold Antonio</li>
            <li>Anthony Van Cayetano</li>
            <li>Raphael Justin Portuguez</li>
          </div>
        </div>
      </div>
      <div className="container mx-auto my-5 p-4 w-3/5 text-center">
        <p className="mb-4 text-gray-700 text-2xl">
          Want to learn more? View our source codes.
        </p>
        <a
          href="https://github.com/avancayetano/cs132-project"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white mx-auto cursor-pointer bg-blue-700 hover:bg-blue-800 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2"
        >
          GitHub Repo
        </a>
      </div>
    </BasePage>
  );
};

export default IndexPage;

export const Head = () => (
  <>
    <title>CS 132 Project | Overview</title>
  </>
);
