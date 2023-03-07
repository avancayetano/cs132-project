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
      text: "lorem ipsum dolor magnifico abracadabralisus",
      link: "",
    },
    {
      label: "Problem Formulation",
      text: "lorem ipsum dolor magnifico abracadabralisus. Go to statement of the problem",
      link: "/problem",
    },
    {
      label: "Data Collection",
      text: "lorem ipsum dolor magnifico abracadabralisus. Go to statement of the problem",
      link: "/data",
    },
    {
      label: "Methodology",
      text: "lorem ipsum dolor magnifico abracadabralisus. Go to statement of the problem",
      link: "/methods",
    },
    {
      label: "Results and Conclusion",
      text: "lorem ipsum dolor magnifico abracadabralisus. Go to statement of the problem",
      link: "/results",
    },
  ];

  return (
    <BasePage page="Overview">
      <OverviewHero />
      <div className="divider"></div>
      <div className="container">AA</div>
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
