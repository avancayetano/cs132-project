import React from "react";
import BasePage from "../components/BasePage";

import { Link } from "gatsby";

import InitPreprocessing from "../components/exploration/InitPreprocessing";
import NaturalLanguage from "../components/exploration/NaturalLanguage";
import TimeSeries from "../components/exploration/TimeSeries";
import FeatureAnalysis from "../components/exploration/FeatureAnalysis";
import Visualization from "../components/exploration/Visualization";
import ExtLink from "../components/ExtLink";

const ExplorationPage = () => {
  return (
    <BasePage page={"Exploration"}>
      <div className="container mx-auto w-4/5 text-left">
        <article className="prose lg:prose-xl mx-auto text-justify prose-a:text-blue-600">
          <h1 className="text-center">Data Exploration</h1>
          <section className="text-center">
            The codes corresponding to the processes discussed on this page can
            be found on this link:{" "}
            <ExtLink to="https://github.com/avancayetano/chismisinfo-backend/tree/main/analysis">
              analysis/
            </ExtLink>
            .<br></br>Make sure that you've read the{" "}
            <Link to="/collection">Data Collection</Link> page first.
          </section>

          <h2>Outline</h2>
          <ol>
            <li>
              <Link href="#exploration-questions">
                Data Exploration Questions
              </Link>
            </li>
            <li>
              <Link href="#preprocessing">Preprocessing</Link>
            </li>
            <ol>
              <li>
                <Link href="#init-preprocessing">Initial Preprocessing</Link>
              </li>
              <li>
                <Link href="#nlp">Natural Language Processing</Link>
              </li>
              <li>
                <Link href="#time-series">Time Series Processing</Link>
              </li>
            </ol>
            <li>
              <Link href="#feature-analysis">Feature Analysis</Link>
            </li>
            <li>
              <Link to="#visualization">Visualization</Link>
            </li>
          </ol>

          <section>
            <h2 id="exploration-questions">Data Exploration Questions</h2>
            <div>
              Please refer to{" "}
              <Link to={"/problem/#exploration-questions"}>
                Data Exploration Questions
              </Link>{" "}
              on the Problem page.
            </div>
          </section>
          <section>
            <h2 id="preprocessing">Preprocessing</h2>
            <div>
              <h3 id="init-preprocessing">Initial Preprocessing</h3>
              <InitPreprocessing></InitPreprocessing>
            </div>
            <div>
              <h3 id="nlp">Natural Language Processing</h3>
              <NaturalLanguage></NaturalLanguage>
            </div>
            <div>
              <h3 id="time-series">Time Series Processing</h3>
              <TimeSeries></TimeSeries>
            </div>
          </section>
          <section>
            <h2 id="feature-analysis">Feature Analysis</h2>
            <FeatureAnalysis></FeatureAnalysis>
          </section>
          <section>
            <h2 id="visualization">Visualization</h2>
            <Visualization></Visualization>
          </section>
        </article>
      </div>
    </BasePage>
  );
};

export default ExplorationPage;

export const Head = () => (
  <>
    <title>Chismisinfo | Data Exploration</title>
    <meta name="viewport" content="width=1024"></meta>
  </>
);
