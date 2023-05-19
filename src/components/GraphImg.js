import React from "react";

const GraphImg = (props) => {
  return (
    <div className="content-center">
      <figure>
        <img className={`m-auto ${props.width}`} src={props.image} />
      </figure>
    </div>
  );
};

export default GraphImg;
