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
      <div className="container my-16">
        <h3 className="lead">{props.label}</h3>
        <p>
          {props.text + " "}
          <Link to={props.link} className="text-blue-600">
            &gt;&gt;
          </Link>
        </p>
      </div>
    );
  };

  return (
    <BasePage page="Overview">
      <div className="hero min-h-fit">
        <div className="hero-content">
          <div className="">
            <h1 className="mb-4 text-5xl font-extrabold  text-center">
              Allegations Against Robredo Sisters
            </h1>
            <h1 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-center text-gray-600">
              PH Twitter{" "}
              <span className="underline underline-offset-4 decoration-6 decoration-red-400 ">
                Fake News*
              </span>{" "}
              Analysis
            </h1>
            <h2 className="mb-4 font-extrabold leading-none tracking-tight text-center">
              By Chis
              <mark className="px-1 text-white bg-red-400 rounded ">
                misinformation
              </mark>{" "}
              Team
            </h2>
            <div className="container mx-auto mt-16 p-4 w-full">
              <div className="mx-auto">
                <article className="prose lg:prose-xl prose-a:text-blue-600 mx-auto">
                  <h2 className="mb-4 font-extrabold leading-none tracking-tight">
                    Abstract
                  </h2>
                  <p className="text-justify">
                    The recent 2022 Philippine Elections have been a dense
                    mixture of information and conspiracies. Within the campaign
                    period, defamation through disinformation (has often been
                    done/is typical) against Leni Robredo, a strong contender
                    for the presidency{" "}
                    <a href="https://www.rappler.com/moveph/election-disinformation-efforts-target-robredo-image-boost-marcos-jr-tsek-ph-study/">
                      [Chua, 2022]
                    </a>
                    . Even the three children of Robredo were victims of
                    disinformation up to the point of sexual harassment{" "}
                    <a href="https://www.rappler.com/nation/elections/aika-robredo-seeks-nbi-assistance-fake-video-scandal-issue/">
                      [Bolledo, 2022]
                    </a>
                    . This study aims to detail, analyze, and interpret
                    malicious tweets which declare disinformation about Jessica
                    Marie "Aika" Robredo, Janine Patricia "Tricia" Robredo, and
                    Jillian Therese Robredo.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="divider"></div>
      <div className="container mx-auto w-max">
        <article className="prose lg:prose-xl mx-auto max-w-none">
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
            Check out our <Link to="about">about</Link> page.
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
