import React from "react";
import BasePage from "../components/BasePage";
import Useless_graph from "../components/useless_graph";

const DataPage = () => {
  return (
    <BasePage page={"Data"}>
      <div className="container mx-auto w-4/5 text-left">
        <article className="prose lg:prose-xl mx-auto text-justify">
          <h1 className="text-center">Data Exploration</h1>
          <h2>Collection</h2>
          <p>
            We are able to scrape a total of x,xxx tweets, 188 of which are
            disinformation from xxx accounts.
          </p>
          <p>Insert card featuring disinfo account</p>{" "}
          <p>Insert Join date cumulative line graph</p>
          <h2>Who are the accounts mentioning?</h2>
          <p>
            Insert a mindmap alternative some kind of nested bar graph!
          </p>{" "}
          <p>Insert card featuring disinfo tweet</p>
          <h4>How many tweets per fake news incident?</h4>
          <p>
            How do they distribute across time? (color coded histogram)
          </p>{" "}
          <h2>FOCAL FEATURES?</h2>
          <p>bin across all cat features</p>
          <p>Standardize and graph a few num features</p>
          <p>correlate all num features</p>
          <h2>Statistics Research Questions</h2>
          So lame a header haha
          <h4>Were the accounts new?</h4>
          T-test or Mann-Whitney U test for raw.csv and disinfo.csv
          <h4>
            Do tweets containing references to Leni Robredo have a negative
            sentiment towards her?
          </h4>
        </article>
      </div>
    </BasePage>
  );
};

export default DataPage;

export const Head = () => (
  <>
    <title>Chismisinfo | Data</title>
    <meta name="viewport" content="width=1024"></meta>
  </>
);
