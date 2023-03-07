import React from "react";
import { Link } from "gatsby";

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
      <div className="card w-100% bg-base-100">
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
      <OverviewHero />
      <div className="divider"></div>
      <div className="container pl-32 pr-32 pt-4 pb-4">
        <ul className="list-none">
          {headings.map((heading) => (
            <li key={heading.label}>
              <OverviewHeading {...heading} />
            </li>
          ))}
        </ul>
      </div>
      <div className="divider"></div>
      <OverviewAbout />
    </BasePage>
  );
};

export default IndexPage;

export const Head = () => (
  <>
    <title>CS 132 Project | Overview</title>
    <meta name="viewport" content="width=1024"></meta>
  </>
);
