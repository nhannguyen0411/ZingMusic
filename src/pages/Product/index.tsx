import React, { FC } from "react";

interface PropTypes {
  match: {
    params: {
      id: string;
    };
  };
}

const Product: FC<PropTypes> = (props) => {
  const { match } = props;
  console.log(match);
  return <div>{`product ${match.params.id} `}</div>;
};

export default Product;
