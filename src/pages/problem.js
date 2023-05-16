import React from "react";

import BasePage from "../components/BasePage";

const ProblemPage = (props) => {
  return (
    <BasePage page={"Problem"}>
      <article className="prose lg:prose-xl mx-auto text-justify">
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

        <h2>Focal Research Question</h2>
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
        <h2>Data Exploration Questions</h2>
        <ol>
          <li>
            What are the characteristics of the tweets when grouped by
            disinformation topic?
            <ol type="a">
              <li>
                What are the names associated with disinformation against the
                Robredo Sisters?
              </li>
              <li>How many tweets per topic?</li>
              <li>When was the first, last tweet of each topic posted?</li>
              <li>When were the days when each topic was the most trending?</li>
            </ol>
          </li>
          <li>What does the average disinformation tweet look like?</li>
          <li>What does the average disinformation account look like?</li>
          <li>
            How do other features compare with the feature Leni Sentiment?
            (Feature Trends)
          </li>
        </ol>
        <h2>Data Analysis Questions</h2>
        <ol>
          <li>Do the tweets have a negative sentiment against Leni Robredo?</li>
          <li>Were the disinformation accounts newly created?</li>
          <li>
            Do tweets having negative sentiments towards Leni Robredo have a
            positive sentiment towards Bongbong Marcos?
          </li>
          <li>
            Does the cumulative negative sentiment against Leni Robredo have a
            correlation with the cumulative number of disinformation accounts
            joining twitter?
          </li>
          <li>
            Do tweets, when grouped according to account popularity, differ in
            terms of sentiment towards Leni Robredo?
          </li>
          <li>
            Do tweets, when grouped according to engagement, differ in terms of
            sentiment towards Leni Robredo?
          </li>
        </ol>
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
