import React from "react";
import { Link } from "gatsby";

import BasePage from "../components/BasePage";

// The Overview page
const IndexPage = () => {
  const headings = [
    {
      label: "Problem Formulation",
      text: (
        <>
          <b>Chismisinformation</b> is a big problem. Unfortunately, with the
          rise of social media, chismisinformation has evolved to become an even
          bigger of a problem. This is why we want to fight this. In this
          section, we discuss the main goal of the study and the questions we
          want to answer.
        </>
      ),
      link: "/problem",
    },
    {
      label: "Data Collection",
      text: (
        <>
          Before we fight the problem of chismisinformation, we have to prove
          first that such problem exists. Hence, in this section, we discuss how
          we collected our data, and how we identified and labeled a number of
          misinformation tweets.
        </>
      ),
      link: "/collection",
    },

    {
      label: "Data Exploration",
      text: (
        <>
          Not all tweets are created equal. Some are certified{" "}
          <b>certified chismisinfo</b>. In this section, we explore the
          different characteristics of these so-called 'certified chismisinfo'
          tweets, as well as the patterns and trends occuring among these
          'features'.
        </>
      ),
      link: "/exploration",
    },
    {
      label: "Data Analysis",
      text: (
        <>
          <b>Chismisinformation</b> is a monster of a problem. This is why we
          need a powerful weapon to fight this. Fortunately, our Data Science
          course has provided us with methods such as statistical tests and
          machine learning models that we can use to annihilate this problem.
        </>
      ),
      link: "/analysis",
    },
    {
      label: "Conclusion",
      text: (
        <>
          In this section, we provide insights and interpretations of the
          results we obtained from our analysis. We are also hoping that our
          insights would encourage everyone to join the fight against
          dis/misinformation.
        </>
      ),
      link: "/conclusion",
    },
    {
      label: "About Us",
      text: (
        <>
          We are the <b>Chismisinformation Team</b>; the destroyer of fake news,
          the devourer of chismis, the terminator of dis/misinformation,{" "}
          <b>the obliterator of chismisinfo</b>. Get to know more about us.
        </>
      ),
      link: "/about",
    },
  ];

  const OverviewHeading = (props) => {
    return (
      <div className="">
        <h3 className="lead">
          <Link
            to={props.link}
            className="underline-offset-4 decoration-4 decoration-blue-600"
          >
            {props.label}
          </Link>
        </h3>
        <div className="text-justify">{props.text}</div>
      </div>
    );
  };

  return (
    <BasePage page="Overview">
      <div className="hero">
        <div className="hero-content">
          <div className="">
            <h1 className="mb-12 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl text-center">
              Allegations Against{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r to-fuchsia-700 from-pink-500">
                Robredo Sisters
              </span>{" "}
            </h1>
            <h1 className="mb-6 text-4xl font-extrabold leading-none tracking-tight text-center">
              PH Twitter{" "}
              <span className="underline underline-offset-4 decoration-4 decoration-red-400 ">
                Fake News*
              </span>{" "}
              Analysis
            </h1>
            <h2 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-center">
              By Chis
              <mark className="px-1 text-white bg-red-900 rounded ">
                misinformation
              </mark>{" "}
              Team
            </h2>
            <div className="container mx-auto mt-16 p-4 w-full">
              <div className="mx-auto">
                <article className="prose lg:prose-xl prose-a:text-blue-600 mx-auto max-w-prose">
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
      <div className="divider w-4/5 mx-auto mb-8"></div>
      <div className="container mx-auto w-max">
        <article className="prose lg:prose-xl mx-auto">
          <h2 className="py-0 my-0">Outline</h2>
          <div className="">
            <ul className="py-0">
              {headings.map((heading) => (
                <li key={heading.label}>
                  <OverviewHeading {...heading} />
                </li>
              ))}
            </ul>
          </div>
        </article>
      </div>
    </BasePage>
  );
};

export default IndexPage;

export const Head = () => (
  <>
    <title>Chismisinfo</title>
    <meta name="viewport" content="width=1024"></meta>
  </>
);
