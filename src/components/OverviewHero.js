import React from "react";

import logo from "../images/logo circle.png";

const OverviewHero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <div className="">
          <h1 className="mb-4 text-6xl font-extrabold  text-center">
            CS 132{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-700 from-sky-500">
              Data Science
            </span>{" "}
          </h1>
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-center text-gray-700">
            Group 21
          </h1>
          <div className="container mx-auto mt-16 py-4 px-20 grid grid-cols-3 gap-12 w-full">
            <div>
              <img src={logo} className="w-full" alt="Logo" />
            </div>
            <div className="col-span-2">
              <article className="prose lg:prose-xl max-w-none">
                <h2 className="mb-4 font-extrabold leading-none tracking-tight">
                  Chis
                  <mark className="px-1 text-white bg-red-900 rounded ">
                    misinformation
                  </mark>
                </h2>

                <p className="lead text-justify">
                  We are data science students from the University of the
                  Philippines - Diliman under the supervision of Prof. Paul
                  Regonia. Imbued with love for the discipline and the nation,
                  we aim to produce a rigorous study about disinformation in the
                  Philippines by applying cutting-edge methods data science
                  currently provides. We plan to investigate information
                  generated on Twitter dating from 2016 to 2022.
                </p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewHero;
