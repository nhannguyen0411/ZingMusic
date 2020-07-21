import React from "react";
import NavbarTitle from "../../atoms/NavbarTitle";

import "./styles.scss";

const Partner = (props) => {
  const { arr } = props;
  return (
    <div className="partner-wrapper">
      <NavbarTitle parent="partner" name="ĐỐI TÁC" />
      <div className="list-partner">
        {arr.map((item, index) => {
          return <img key={index} src={item.image} alt="image" />;
        })}
      </div>
    </div>
  );
};

export default Partner;
