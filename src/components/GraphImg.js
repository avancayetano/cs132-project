import React from "react";

const GraphImg = (props) => {
  return (
    <div className="content-center">
      <figure>
        <img src={props.image} />
      </figure>
    </div>
  );
};

export default GraphImg;
