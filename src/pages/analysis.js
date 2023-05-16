import React from "react";
import BasePage from "../components/BasePage";

const AnalysisPage = () => {
  return (
    <BasePage page={"Analysis"}>
      <article className="prose lg:prose-xl mx-auto">
        <h1 className="text-center">Data Analysis</h1>
        <h2>Focal Research Question</h2>
        <h4>
          Do tweets referencing Leni have a negative sentiment towards her?
        </h4>
        <p>
          In this problem, we have a categorical independent variable and a
          categorical dependent variable, both of which are boolean. Therefore,
          the Chi Square of Independence should be applied.
        </p>
        <table>
          <tr>
            <td></td>
          </tr>
          <tr></tr>
          <tr></tr>
        </table>
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
