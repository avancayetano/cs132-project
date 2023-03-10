import React from "react";
import BasePage from "../components/BasePage";

const MethodsPage = () => {
  return (
    <BasePage page={"Methods"}>
      <article className="prose lg:prose-xl mx-auto min-h-screen">
        <h1 className="text-center">Methods</h1>
      </article>
    </BasePage>
  );
};

export default MethodsPage;

export const Head = () => (
  <>
    <title>CS 132 Project | Methods</title>
    <meta name="viewport" content="width=1024"></meta>
  </>
);
