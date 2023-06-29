import React from "react";
import BasePage from "../components/BasePage";
import { Link } from "gatsby";
import Results from "../components/analysis/Results";
import DataModeling from "../components/analysis/DataModeling";

const AnalysisPage = () => {
  return (
    <BasePage page={"Analysis"}>
      <article className="prose text-justify lg:prose-xl mx-auto prose-a:text-blue-600">
        <h1 className="text-center">Data Analysis</h1>
        <section className="text-center">
          Make sure that you've read the{" "}
          <Link to="/exploration">Data Exploration</Link> page first.
        </section>
        <section>
          <Results></Results>
          {/* <table>
            <tr>
              <td></td>
            </tr>
            <tr></tr>
            <tr></tr>
          </table> */}
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
