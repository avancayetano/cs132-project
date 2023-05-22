import React from "react";

import BasePage from "../components/BasePage";

import logo from "../images/logo circle.png";
import harold from "../images/harold.jpg";
import avan from "../images/avan.jpg";
import raph from "../images/raph.jpg";
import ExtLink from "../components/ExtLink";

const AboutPage = () => {
  const profiles = [
    {
      name: "Harold Antonio",
      image: harold,
      description: `Mathematics has always been interesting to me. Describing data with
        numbers and then interpreting the world with them is a proof that we
        have come a long way as a society. I have been interested in
        Christian apologetics recently. Since then, I am always wondering
        how the existence of injustice factors into the perfect love of God.
        I am a student from the class CS 132 WFU.`,
      github: "https://github.com/hcantonio1",
    },
    {
      name: "Anthony Van Cayetano",
      image: avan,
      description: `Hi! My name is Avan. I've always liked data, mathematics, and data
        science. I really think that numbers and data are beautiful,
        especially when visualized. Moreover, I also like playing video
        games and creating projects in my spare time. Reading fake news is
        something that I dislike. Hopefully, this study can help other
        people who hate fake news too. I am a student from the class CS
        132 WFU.`,
      github: "https://github.com/avancayetano",
    },
    {
      name: "Raphael Justin Portuguez",
      image: raph,
      description: `Hello! I am Raphael. I have always been interested with subjects that
      involve equations. My passion for subjects such as Mathematics and
      Physics has grown lately. I always wonder how I can apply my Computer
      Science knowledge to these two particular fields. I am a student from the 
      class CS 132 WFX.`,
      github: "https://github.com/rj42guez",
    },
  ];

  const ProfileCard = (props) => {
    return (
      <div className="card card-compact bg-base-100 shadow-xl not-prose">
        <figure className="">
          <img src={props.image} alt="Person" className="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title justify-center">{props.name}</h2>
          <p className="text-justify text-base">{props.description}</p>
          <div className="card-actions justify-center my-4">
            <ExtLink className="btn btn-primary" to={props.github}>
              GitHub Profile
            </ExtLink>
          </div>
        </div>
      </div>
    );
  };

  return (
    <BasePage page={"About"}>
      <div className="hero">
        <div className="hero-content">
          <div className="">
            <h1 className="mb-4 text-6xl font-extrabold  text-center">
              CS 132{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-700 from-sky-500">
                Data Science
              </span>{" "}
            </h1>
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-center text-gray-700">
              Group 21
            </h1>
            <div className="container mx-auto mt-16 py-4 px-20 grid grid-cols-3 gap-12 w-full">
              <div>
                <img src={logo} className="w-full" alt="Logo" />
              </div>
              <div className="col-span-2">
                <article className="prose lg:prose-xl max-w-none">
                  <h2 className="mb-4 font-extrabold leading-none tracking-tight">
                    Chis
                    <mark className="px-1 text-white bg-red-900 rounded ">
                      misinformation
                    </mark>
                  </h2>

                  <p className="lead text-justify">
                    We are data science students from the University of the
                    Philippines - Diliman under the supervision of Prof. Paul
                    Regonia. Imbued with love for the discipline and the nation,
                    we aim to produce a rigorous study about disinformation in
                    the Philippines by applying cutting-edge methods data
                    science currently provides. We plan to investigate
                    information generated on Twitter dating from 2016 to 2022.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="divider mx-auto w-4/5 my-12"></div>
      <div className="container mx-auto w-4/5 text-center">
        <article className="prose lg:prose-xl mx-auto max-w-none">
          <h2 className="text-center">Who We Are</h2>

          <div className="grid grid-cols-3 gap-4 md:w-full mx-auto my-8">
            {profiles.map((p) => (
              <ProfileCard {...p} key={p.name} />
            ))}
          </div>

          <div className="divider">Contact Us</div>
          <div className="mx-auto mb-12 text-center">
            <p className="mb-6">
              Have any concerns? Contact us by filling out this form!
            </p>
            <ExtLink
              to="https://docs.google.com/forms/d/e/1FAIpQLSfXFGIN8BqF7JEOgAP0AwxABbROKVVYaQk2KrZovln-3oMq0Q/viewform?usp=sharing"
              className="btn btn-secondary"
            >
              Submit your questions here
            </ExtLink>
          </div>
        </article>
      </div>
      <div className="divider w-4/5 mx-auto my-16"></div>
      <div className="container mx-auto w-3/5">
        <article className="prose lg:prose-xl max-w-none prose-a:text-blue-600">
          <h2 className="text-center">Motivation and Hesitation</h2>
          <p className="text-justify">
            The recent 2022 Philippine Elections has been a dense mixture of
            information and conspiracies. Within the campaign period, defamation
            through disinformation (has often been done/is typically) against
            Leni Robredo, a strong contender for the presidency{" "}
            <ExtLink to="https://www.rappler.com/moveph/election-disinformation-efforts-target-robredo-image-boost-marcos-jr-tsek-ph-study/">
              [Chua, 2022]
            </ExtLink>
            . Even the three children of Robredo were victims of disinformation
            up to the point of sexual harassment{" "}
            <ExtLink to="https://www.rappler.com/nation/elections/aika-robredo-seeks-nbi-assistance-fake-video-scandal-issue/">
              [Bolledo, 2022]
            </ExtLink>
            . This study aims to detail, analyze, and interpret malicious tweets
            which declare disinformation about Jessica Marie "Aika" Robredo,
            Janine Patricia "Tricia" Robredo, and Jillian Therese Robredo.
          </p>
          <p className="text-justify">
            It is not a straightforward task to come up with a topic. We
            initially thought that choosing an election-related topic could be
            mundane, so we considered alternatives. Harold suggested subjects
            regarding the Covid Pandemic and China-US propaganda. Raphael
            pondered over topics about the economy and basketball. In the end,
            we settled for the allegations against the Robredo sisters because
            we think it is easier to gather tweets about it and fact-checking
            should require less research.
          </p>
        </article>
      </div>

      <div className="container mx-auto mt-16 w-3/4 text-center">
        <h3 className="my-4 text-2xl">
          Want to learn more? View our source codes.
        </h3>
        <ExtLink
          to="https://github.com/avancayetano/cs132-project"
          className="btn btn-primary mx-5"
        >
          Chismisinfo Website
        </ExtLink>
        <ExtLink
          to="https://github.com/avancayetano/chismisinfo-backend"
          className="btn btn-secondary"
        >
          Chismisinfo Backend
        </ExtLink>
      </div>
    </BasePage>
  );
};

export default AboutPage;

export const Head = () => (
  <>
    <title>Chismisinfo | About</title>
    <meta name="viewport" content="width=1024"></meta>
  </>
);
