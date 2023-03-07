import React from "react";
import { Link } from "gatsby";
import logo from "../images/logo.png";

const OverviewHero = () => {
  return (
    <div className="hero min-h-fit">
      <div className="hero-content">
        <div className="">
          <h1 className="mb-4 text-7xl font-extrabold text-gray-800 text-center">
            CS 132{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-700 from-sky-500">
              Data Science
            </span>{" "}
          </h1>
          <h1 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-700 text-center">
            PH Twitter{" "}
            <span className="underline underline-offset-4 decoration-6 decoration-red-400 ">
              Fake News*
            </span>{" "}
            Analysis
          </h1>
          <div className="container mx-auto mt-16 p-4 grid grid-cols-3 gap-12 w-full">
            <div>
              <img src={logo} className="w-full rounded-full" alt="Logo" />
            </div>
            <div className="col-span-2">
              <article className="prose prose-base">
                <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl ">
                  Chis
                  <mark className="px-1 text-white bg-red-400 rounded ">
                    misinformation
                  </mark>
                </h1>

                <p className="lead text-justify">
                  We are data science students from University of the
                  Philippines - Diliman under the supervision of Prof. Paul
                  Regonia. Imbued with love for the discipline and the nation,
                  we aim to produce a rigorous study about disinformation in the
                  Philippines by applying cutting-edge methods data science
                  currently provides. We plan to investigate information
                  generated in Twitter dating from 2020 to 2022.
                </p>
                <h3>
                  <Link to="/team">Data Science Team</Link>
                </h3>
                <ul>
                  <li>Harold Antonio</li>
                  <li>Anthony Van Cayetano</li>
                  <li>Raphael Justin Portuguez</li>
                </ul>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewHero;
