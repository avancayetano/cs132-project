import React from "react";
import BasePage from "../components/BasePage";

import Results from "../components/analysis/Results";
import DataModeling from "../components/analysis/DataModeling";

const AnalysisPage = () => {
  return (
    <BasePage page={"Analysis"}>
      <article className="prose text-justify lg:prose-xl mx-auto">
        <h1 className="text-center">Data Analysis</h1>
        <section>
          <h2 id="analysis-results">Results</h2>
          <Results></Results>
          <table>
            <tr>
              <td></td>
            </tr>
            <tr></tr>
            <tr></tr>
          </table>
        </section>
        <section>
          <h2 id="data-modeling">Disinformation Classifier</h2>
          <DataModeling></DataModeling>
        </section>
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
