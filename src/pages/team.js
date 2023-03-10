import React from "react";

import BasePage from "../components/BasePage";
import OverviewHero from "../components/OverviewHero";
import harold from "../images/harold.jpg";
import avan from "../images/avan.jpg";
import raph from "../images/raph.jpg";
import OverviewAbout from "../components/OverviewAbout";

const TeamPage = () => {
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
      description: `Hello! I am Raphael Justin C. Portuguez, but you can call me Raph
        🙂. My interests include mathematics, science, and EDM music.
        Lately, I have been updating myself with events all over the
        world. In today's time, I believe we should be aware of what is
        going on outside our country just as much as what is going on
        inside. I am a student from the class CS 132 WFX.`,
      github: "https://github.com/rj42guez",
    },
  ];

  const ProfileCard = (props) => {
    return (
      <div className="card card-compact bg-base-100 shadow-xl">
        <figure className="">
          <img src={props.image} alt="Person" className="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title justify-center">{props.name}</h2>
          <p className="text-justify">{props.description}</p>
          <div className="card-actions justify-center">
            <a
              className="btn btn-primary"
              href={props.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Profile
            </a>
          </div>
        </div>
      </div>
    );
  };

  return (
    <BasePage page={"Team"}>
      <OverviewHero />
      <div className="divider"></div>
      <div className="container mx-auto w-4/5 text-center">
        <article className="prose lg:prose-xl mx-auto">
          <h1 className="text-center">Who We Are</h1>
        </article>

        <div className="grid grid-cols-3 gap-4 md:w-full lg:w-4/5 mx-auto my-8">
          {profiles.map((p) => (
            <ProfileCard {...p} key={p.name} />
          ))}
        </div>

        <div className="divider mt-16">Contact Us</div>
        <div className="container mx-auto mb-12 text-center">
          <p className="mb-6">
            Have any concerns? Contact us by filling out this form!
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfXFGIN8BqF7JEOgAP0AwxABbROKVVYaQk2KrZovln-3oMq0Q/viewform?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            Submit your questions here.
          </a>
        </div>
      </div>
      <div className="divider"></div>
      <OverviewAbout />
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
