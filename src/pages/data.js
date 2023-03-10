import React from "react";
import BasePage from "../components/BasePage";

const DataPage = () => {
  return (
    <BasePage page={"Data"}>
      <article className="prose lg:prose-xl mx-auto min-h-screen">
        <h1 className="text-center">Data</h1>
      </article>
    </BasePage>
  );
};

export default DataPage;

export const Head = () => (
  <>
    <title>CS 132 Project | Data</title>
    <meta name="viewport" content="width=1024"></meta>
  </>
);
