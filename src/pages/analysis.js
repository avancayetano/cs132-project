import React from "react";
import BasePage from "../components/BasePage";

const AnalysisPage = () => {
  return (
    <BasePage page={"Analysis"}>
      <article className="prose lg:prose-xl mx-auto">
        <h1 className="text-center">Data Analysis</h1>
      </article>
    </BasePage>
  );
};

export default AnalysisPage;

export const Head = () => (
  <>
    <title>Chismisinfo | Data Analysis</title>
    <meta name="viewport" content="width=1024"></meta>
  </>
);
