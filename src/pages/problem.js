import React from "react";

import BasePage from "../components/BasePage";

const ProblemPage = (props) => {
  return (
    <BasePage page={"Problem"}>
      <article className="prose lg:prose-xl mx-auto text-justify min-h-screen">
        <h1 className="text-center">Problem</h1>
        <h2>Background</h2>
        <p>
          What is the purpose of disinformation? There is no inherent value in
          disinformation except to alter the perception of the public toward
          certain issues or individuals. Now, although the researchers focus on
          the children of Leni Robredo, the tweets may include references to
          Mrs. Robredo herself, possibly attributing other malicious stories to
          her identity.
        </p>
        <p>
          The former Vice President of the Philippines Leni Robredo ran for the
          presidential seat last 2022 Elections and has seen a surge of
          disinformation attacks against her during the campaign period.{" "}
        </p>

        <h2>Research Question</h2>
        <p>
          The researchers ought to identify whether tweets alleging
          disinformation stories to the children of Leni Robredo contain
          references to the ex-Vice President herself intending to malign her
          public image.{" "}
        </p>
        <h4>Null Hypothesis</h4>
        <p>
          The tweets do not include references to Leni Robredo intending to
          defame her.{" "}
        </p>
        <h4>Alternative Hypothesis</h4>
        <p>
          Most tweets include references to Leni Robredo intending to defame
          her.
        </p>
        <h4>Action Plan</h4>
        <p>
          Gather tweets consisting of disinformation towards the Robredo sisters
          and scan each for references to the former Vice President herself.
        </p>
        {/*<h2>Important Sub-problems</h2>
        <ol>
          <li>What are the allegations surrounding the Robredo sisters?</li>
          <li>
            Who among the sisters is most affected? Could it be due to her
            popularity?
          </li>
          <li>
            How does the number of disinformation tweets plot against the date?
  </li>
        </ol>*/}
      </article>
    </BasePage>
  );
};

export default ProblemPage;

export const Head = () => (
  <>
    <title>Chismisinfo | Problem</title>
    <meta name="viewport" content="width=1024"></meta>
  </>
);
