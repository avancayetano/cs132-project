import React from "react";
import BasePage from "../components/BasePage";

const ConclusionPage = () => {
  return (
    <BasePage page={"Conclusion"}>
      <article className="prose lg:prose-xl mx-auto">
        <h1 className="text-center">Conclusion</h1>
      </article>
    </BasePage>
  );
};

export default ConclusionPage;

export const Head = () => (
  <>
    <title>Chismisinfo | Results</title>
    <meta name="viewport" content="width=1024"></meta>
  </>
);
