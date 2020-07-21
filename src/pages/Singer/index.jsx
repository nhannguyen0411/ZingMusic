import React from "react";

const Singer = (props) => {
  const { match } = props;
  console.log("singer", match);
  return <div>{`match ${match.params.name}`}</div>;
};

export default Singer;
