import React from "react";
import { Link } from "gatsby";
import logo from "../images/logo.png";

import BasePage from "../components/BasePage";
import OverviewHero from "../components/OverviewHero";
import OverviewAbout from "../components/OverviewAbout";

// The Overview page
const IndexPage = () => {
  const headings = [
    {
      label: "Abstract",
      text: "It's been discovered that there is disinformation about the sisters.",
      link: "",
    },
    {
      label: "Problem Formulation",
      text: "In this section we will discuss the main goal of the study. Go to statement of the problem.",
      link: "/problem",
    },
    {
      label: "Data Collection",
      text: "Not all tweets are created equal. Some are certified chismisinfo. Go to data collection.",
      link: "/data",
    },
    {
      label: "Methodology",
      text: "Discussion about the data science methods we utilized can be found here. Go to methodology.",
      link: "/methods",
    },
    {
      label: "Results and Conclusion",
      text: "From data we gain information and insight through interpretation. Go to results and conclusion.",
      link: "/results",
    },
    //{
    //label: "About",
    //text: "Check out our about page.",
    //link: "/team"
    //}
  ];

  const OverviewHeading = (props) => {
    return (
      <div className="card w-4/5 bg-base-100">
        <div className="card-body">
          <h2 className="card-title text-3xl">{props.label}</h2>
          <p>
            {props.text + " "}
            <a>&gt;&gt;</a>
          </p>
          <div className="card-actions justify-end">
            <Link to={props.link} className="btn btn-primary">
              Go
            </Link>
          </div>
        </div>
      </div>
    );
  };

  return (
    <BasePage page="Overview">
      <div className="hero min-h-fit">
        <div className="hero-content">
          <div className="">
            <h1 className="mb-4 text-7xl font-extrabold  text-center">
              CS 132{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-700 from-sky-500">
                Data Science
              </span>{" "}
            </h1>
            <h1 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-center">
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
                <article className="prose prose-a:text-blue-600">
                  <h1 className="mb-4 font-extrabold leading-none tracking-tight">
                    Chis
                    <mark className="px-1 text-white bg-red-400 rounded ">
                      misinformation
                    </mark>
                  </h1>

                  <p className="lead text-justify">
                    We are data science students from University of the
                    Philippines - Diliman under the supervision of Prof. Paul
                    Regonia. Imbued with love for the discipline and the nation,
                    we aim to produce a rigorous study about disinformation in
                    the Philippines by applying cutting-edge methods data
                    science currently provides. We plan to investigate
                    information generated in Twitter dating from 2020 to 2022.
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
      <div className="divider"></div>
      <div className="container mx-auto w-max">
        <article className="prose lg:prose-xl mx-auto">
          <h1 className="text-center">
            Disinformation Tweets Targeting the Robredo Siblings
          </h1>

          <div className="container">
            <ul className="list-none">
              {headings.map((heading) => (
                <li key={heading.label}>
                  <OverviewHeading {...heading} />
                </li>
              ))}
            </ul>
          </div>
        </article>
      </div>
      <div className="divider"></div>
      <div className="container mx-auto w-3/5">
        <article className="prose max-w-none">
          <h1 className="text-center">About</h1>
          <p className="text-justify">
            Check out our <Link to="team">about</Link> page.
          </p>
        </article>
      </div>
    </BasePage>
  );
};

export default IndexPage;

export const Head = () => (
  <>
    <title>CS 132 Data Science</title>
    <meta name="viewport" content="width=1024"></meta>
  </>
);
