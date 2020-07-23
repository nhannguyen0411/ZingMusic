import React, { FC } from "react";
import NavbarTitle from "../../atoms/NavbarTitle";

import "./style.scss";

interface PropTypes {
  arr: Array<string>;
}

const SingerHot: FC<PropTypes> = (props) => {
  const { arr } = props;

  return (
    <div className="singer-hot-wrapper">
      <NavbarTitle parent="title" name="NGHỆ SĨ HOT" />
      <div className="singer-in-top">
        <div className="first-singer">
          <img src="https://via.placeholder.com/210x210" alt="image" />
        </div>
        <div className="top-singer">
          {arr.map((item: any, index: any) => {
            return (
              <img
                key={index}
                src="https://via.placeholder.com/100"
                alt="image"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SingerHot;
