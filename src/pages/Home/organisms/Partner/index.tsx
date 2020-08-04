import React, { FC } from "react";
import NavbarTitle from "../../atoms/NavbarTitle";
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
        {arr.map((item: info, index) => (
          <img key={index} src={item.image} alt="image" />
        ))}
      </div>
    </div>
  );
};

export default Partner;
