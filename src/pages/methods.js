import React from "react";
import BasePage from "../components/BasePage";

const MethodsPage = () => {
  return (
    <BasePage page={"Methods"}>
      <div className="container mx-auto p-4 w-3/4 text-center">
        <h1 className="mb-4 text-3xl font-extrabold text-gray-800 dark:text-white">
          Methods
        </h1>
      </div>
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
