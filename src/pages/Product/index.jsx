import React from "react";

const Product = (props) => {
  const { match } = props;
  console.log(match);
  return <div>{`product ${match.params.id} `}</div>;
};

export default Product;
