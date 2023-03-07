import React from "react";
import { Link } from "gatsby";

import BasePage from "../components/BasePage";
import logo from "../images/logo.png";

// The Overview page
const IndexPage = () => {
  return (
    <BasePage page={"Overview"}>
      <div className="hero min-h-screen">
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
      <div className="container mx-auto w-3/5">
        <article className="max-w-none prose prose-base">
          <h1 className="text-center">About our study.</h1>
          <p className="text-justify">
            The recent 2022 Philippine Elections has been a dense mixture of
            information and conspiracies. Within the campaign period, defamation
            through disinformation (has often been done/is typically) against
            Leni Robredo, a strong contender for the presidency{" "}
            <a
              href="https://www.rappler.com/moveph/election-disinformation-efforts-target-robredo-image-boost-marcos-jr-tsek-ph-study/"
              target="_blank"
              rel="noopener noreferrer"
            >
              [Chua, 2022]
            </a>
            . Even the three children of Robredo were victims of disinformation
            up to the point of sexual harassment{" "}
            <a
              href="https://www.rappler.com/nation/elections/aika-robredo-seeks-nbi-assistance-fake-video-scandal-issue/"
              target="_blank"
              rel="noopener noreferrer"
            >
              [Bolledo, 2022]
            </a>
            . This study aims to detail, analyze, and interpret malicious tweets
            which declare disinformation about Jessica Marie "Aika" Robredo,
            Janine Patricia "Tricia" Robredo, and Jillian Therese Robredo.
          </p>
          <p className="text-justify">
            It is not a straightforward task to come up with a topic. We
            initially thought that choosing an election-related topic could be
            mundane, so we considered alternatives. Harold suggested subjects
            regarding the Covid Pandemic and China-US propaganda. Raphael
            pondered over topics about the economy and basketball. In the end,
            we settled for the allegations against the Robredo sisters because
            we think it is easier to gather tweets about it and fact-checking
            should require less research.
          </p>
        </article>
      </div>

      <div className="container mx-auto mb-12 w-3/4 text-center">
        <p className="my-6 text-gray-700 text-2xl">
          Want to learn more? View our source codes.
        </p>
        <a
          href="https://github.com/avancayetano/cs132-project"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white mx-auto cursor-pointer bg-blue-700 hover:bg-blue-800 font-medium rounded-full text-sm px-5 py-2.5 text-center"
        >
          Website GitHub Repo
        </a>
      </div>
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
