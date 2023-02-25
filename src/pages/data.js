import React from "react";
import BasePage from "../components/BasePage";

const DataPage = (props) => {
  const location = props.uri;

  return (
    <BasePage location={props.uri}>
      <div className="container mx-auto p-4 w-3/4 text-center">
        <h1 className="mb-4 text-3xl font-extrabold text-gray-800 dark:text-white">
          Data
        </h1>
      </div>
    </BasePage>
  );
};

export default DataPage;

export const Head = () => (
  <>
    <title>CS 132 Project | Data</title>
  </>
);
