import React from "react";

const Card = (props) => {
  return <div className="bg-primary p-5 rounded-lg shadow-lg border border-secondary">{props.children}</div>;
};

export default Card;
