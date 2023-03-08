import React from "react";

import BasePage from "../components/BasePage";

const problem = (props) => {
  return (
    <BasePage page="Problem">
      <article className="prose lg:prose-xl mx-auto">
        <h1 className="text-center">Problem</h1>
        <h2>Background</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget
          ligula augue. Donec at justo non felis fringilla sagittis. Vestibulum
          metus augue, suscipit id tempor id, cursus sed massa. Nunc efficitur
          est ac vestibulum congue. Quisque consectetur diam risus, vitae
          interdum quam vulputate vel. Cras egestas, magna sed malesuada
          bibendum, elit lorem rhoncus nisi, vitae vulputate tortor ipsum eget
          risus. Sed vel convallis nunc.{" "}
        </p>
        <h2>Literature</h2>
        <h2>Statement of the Problem</h2>
        <h2>Hypotheses</h2>
        <h2>Scope and Delimitations</h2>
        <h2>Significance</h2>
      </article>
    </BasePage>
  );
};

export default problem;
