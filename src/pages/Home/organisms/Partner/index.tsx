// libs
import React, { FC } from "react";
// components
import NavbarTitle from "../../atoms/NavbarTitle";
// others
import "./styles.scss";
import { infoPartner } from "../../../../types/Home";

interface PropTypes {
  arr: Array<infoPartner>;
}

const Partner: FC<PropTypes> = (props) => {
  const { arr } = props;

  return (
    <div className="partner-wrapper">
      <NavbarTitle varClass="partner" name="ĐỐI TÁC" />
      <div className="list-partner">
        {arr.map((item: infoPartner, index) => (
          <img key={index} src={item.image} alt="images" />
        ))}
      </div>
    </div>
  );
};

export default Partner;
