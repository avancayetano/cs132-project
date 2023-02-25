import * as React from "react";
import { Alert } from "flowbite-react";

const IndexPage = () => {
  return (
    <main>
      <h1 className="">Hi, we are group 21.</h1>
      <Alert color="info">CS 132 project.</Alert>
      <a
        href="https://github.com/avancayetano/cs132-project"
        class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
      >
        View Source Code
      </a>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>CS 132 Project</title>;
