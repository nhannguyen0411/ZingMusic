import React, { FC } from "react";
import NavbarTitle from "../../atoms/NavbarTitle";
import abc from "../../../../mocks/Partner";

import "./styles.scss";

type info = {
  id: number;
  image: string;
};

interface PropTypes {
  arr: Array<info>;
}

const Partner: FC<PropTypes> = (props) => {
  const { arr } = props;

  return (
    <div className="partner-wrapper">
      <NavbarTitle varClass="partner" name="ĐỐI TÁC" />
      <div className="list-partner">
        {arr.map((item: info, index) => {
          return <img key={index} src={item.image} alt="image" />;
        })}
      </div>
    </div>
  );
};

export default Partner;
