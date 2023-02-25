import React from "react";
import { Avatar, Card } from "flowbite-react";

import BasePage from "../components/BasePage";
import logo from "../images/icon.png";

const TeamPage = (props) => {
  return (
    <BasePage location={props.uri}>
      <div className="container mx-auto p-4 w-3/4 text-center ">
        <h1 className="mb-4 text-3xl font-extrabold text-gray-800 dark:text-white">
          The Team
        </h1>
        <div className="grid grid-cols-3 gap-3">
          <Card href="#">
            <div className="flex flex-wrap gap-2 text-center">
              <img
                src={logo}
                className="w-1/2 rounded-full mx-auto"
                alt="Harold"
              />
            </div>
            <p className="mt-5 text-gray-800 text-xl font-bold">
              Harold Antonio
            </p>
            <p className="my-2 text-gray-800 text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              tincidunt odio eu neque tincidunt luctus. Aenean neque diam,
              lobortis ultricies tellus at, fringilla condimentum lacus. Integer
              leo urna, commodo at dictum non, iaculis eu turpis. Cras ultricies
              ex id arcu blandit accumsan. In sit amet cursus arcu. Quisque quis
              eros sit amet risus placerat fermentum nec et turpis. Aenean
              aliquet porta euismod. Praesent fermentum commodo tortor
              sollicitudin aliquam.
            </p>
          </Card>
          <Card href="#">
            <div className="flex flex-wrap gap-2 text-center">
              <img
                src={logo}
                className="w-1/2 rounded-full mx-auto"
                alt="Avan"
              />
            </div>
            <p className="mt-5 text-gray-800 text-xl font-bold">
              Anthony Van Cayetano
            </p>
            <p className="my-2 text-gray-800 text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              tincidunt odio eu neque tincidunt luctus. Aenean neque diam,
              lobortis ultricies tellus at, fringilla condimentum lacus. Integer
              leo urna, commodo at dictum non, iaculis eu turpis. Cras ultricies
              ex id arcu blandit accumsan. In sit amet cursus arcu. Quisque quis
              eros sit amet risus placerat fermentum nec et turpis. Aenean
              aliquet porta euismod. Praesent fermentum commodo tortor
              sollicitudin aliquam.
            </p>
          </Card>
          <Card href="#">
            <div className="flex flex-wrap gap-2 text-center">
              <img
                src={logo}
                className="w-1/2 rounded-full mx-auto"
                alt="Raph"
              />
            </div>
            <p className="mt-5 text-gray-800 text-xl font-bold">
              Raphael Justin Portuguez
            </p>
            <p className="my-2 text-gray-800 text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              tincidunt odio eu neque tincidunt luctus. Aenean neque diam,
              lobortis ultricies tellus at, fringilla condimentum lacus. Integer
              leo urna, commodo at dictum non, iaculis eu turpis. Cras ultricies
              ex id arcu blandit accumsan. In sit amet cursus arcu. Quisque quis
              eros sit amet risus placerat fermentum nec et turpis. Aenean
              aliquet porta euismod. Praesent fermentum commodo tortor
              sollicitudin aliquam.
            </p>
          </Card>
        </div>

        <div className="inline-flex items-center justify-center w-full">
          <hr className="w-full h-px my-8 bg-gray-200 border-2 dark:bg-gray-700" />
          <span className="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">
            Contact Us
          </span>
        </div>
        <p className="text-blue-700 text-lg">email@example.com</p>
      </div>
    </BasePage>
  );
};

export default TeamPage;

export const Head = () => (
  <>
    <title>CS 132 Project | Team</title>
  </>
);
