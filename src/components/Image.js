import React from "react";

const Image = (props) => {
  return (
    <div className="content-center">
      <figure>
        <img className={`m-auto ${props.width}`} src={props.image} />
      </figure>
    </div>
  );
};

export default Image;
