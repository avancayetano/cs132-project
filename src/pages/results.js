import React from "react";
import BasePage from "../components/BasePage";

const ResultsPage = () => {
  return (
    <BasePage page={"Results"}>
      <article className="prose lg:prose-xl mx-auto">
        <h1 className="text-center">Results</h1>
      </article>
    </BasePage>
  );
};

export default ResultsPage;

export const Head = () => (
  <>
    <title>CS 132 Project | Results</title>
    <meta name="viewport" content="width=1024"></meta>
  </>
);
