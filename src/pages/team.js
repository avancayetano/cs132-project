import React from "react";
import { Card } from "flowbite-react";

import BasePage from "../components/BasePage";
import harold from "../images/harold.jpg";
import avan from "../images/avan.jpg";
import raph from "../images/raph.jpg";

const TeamPage = () => {
  return (
    <BasePage page={"Team"}>
      <div className="container mx-auto p-4 w-4/5 text-center ">
        <h1 className="mb-4 text-3xl font-extrabold text-gray-800 dark:text-white">
          Who We Are
        </h1>
        <div className="grid grid-cols-3 gap-3">
          <Card>
            <div className="flex flex-wrap gap-2 text-center">
              <img
                src={harold}
                className="w-1/2 rounded-full mx-auto"
                alt="Harold"
              />
            </div>
            <p className="mt-5 text-gray-800 text-xl font-bold">
              Harold Antonio
            </p>
            <p className="text-gray-800 text-justify">
              Mathematics has always been interesting to me. Describing data
              with numbers and then interpreting the world with them is a proof
              that we have come a long way as a society. I have been interested
              in Christian apologetics recently. Since then, I am always
              wondering how the existence of injustice factors into the perfect
              love of God. I am a student from the class CS 132 WFU.
            </p>
            <a
              href="https://github.com/hcantonio1"
              target="_blank"
              rel="noopener noreferrer"
              className="object-bottom text-white mx-auto cursor-pointer bg-green-700 hover:bg-green-800 font-medium rounded-full text-sm px-5 py-2.5 text-center"
            >
              GitHub Profile
            </a>
          </Card>
          <Card>
            <div className="flex flex-wrap gap-2 text-center">
              <img
                src={avan}
                className="w-1/2 rounded-full mx-auto"
                alt="Avan"
              />
            </div>
            <p className="mt-5 text-gray-800 text-xl font-bold">
              Anthony Van Cayetano
            </p>
            <p className="my-2 text-gray-800 text-justify">
              Hi! My name is Avan. I've always liked data, mathematics, and data
              science. I really think that numbers and data are beautiful,
              especially when visualized. Moreover, I also like playing video
              games and creating projects in my spare time. Reading fake news is
              something that I dislike. Hopefully, this study can help other
              people who hate fake news too. I am a student from the class CS
              132 WFU.
            </p>
            <a
              href="https://github.com/avancayetano"
              target="_blank"
              rel="noopener noreferrer"
              className="bottom-0 text-white mx-auto cursor-pointer bg-green-700 hover:bg-green-800 font-medium rounded-full text-sm px-5 py-2.5 text-center"
            >
              GitHub Profile
            </a>
          </Card>
          <Card>
            <div className="flex flex-wrap gap-2 text-center">
              <img
                src={raph}
                className="w-1/2 rounded-full mx-auto"
                alt="Raph"
              />
            </div>
            <p className="mt-5 text-gray-800 text-xl font-bold">
              Raphael Justin Portuguez
            </p>
            <p className="my-2 text-gray-800 text-justify">
              Hello! I am Raphael Justin C. Portuguez, but you can call me Raph
              🙂. My interests include basketball, parkour, and EDM music.
              Lately, I have been updating myself with events all over the
              world. In today's time, I believe we should be aware of what is
              going on outside our country just as much as what is going on
              inside. I am a student from the class CS 132 WFX.
              <br />
              <br />
            </p>
            <a
              href="https://github.com/rj42guez"
              target="_blank"
              rel="noopener noreferrer"
              className="bottom-0 text-white mx-auto cursor-pointer bg-green-700 hover:bg-green-800 font-medium rounded-full text-sm px-5 py-2.5 text-center"
            >
              GitHub Profile
            </a>
          </Card>
        </div>

        <div className="inline-flex items-center justify-center w-full">
          <hr className="w-full h-px my-8 bg-gray-200 border-2 dark:bg-gray-700" />
          <span className="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">
            Contact Us
          </span>
        </div>
        <div className="container mx-auto mb-12 w-3/4 text-center">
          <p className="mb-6 text-gray-700 text-xl">
            Have any concerns? Contact us by filling out this form!
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfXFGIN8BqF7JEOgAP0AwxABbROKVVYaQk2KrZovln-3oMq0Q/viewform?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mx-auto cursor-pointer bg-blue-700 hover:bg-blue-800 font-medium rounded-full text-sm px-5 py-2.5 text-center"
          >
            Submit your questions here.
          </a>
        </div>
      </div>
    </BasePage>
  );
};

export default TeamPage;

export const Head = () => (
  <>
    <title>CS 132 Project | Team</title>
    <meta name="viewport" content="width=1024"></meta>
  </>
);
