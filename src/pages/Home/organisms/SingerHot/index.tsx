// libs
import React, { FC } from "react";
// components
import NavbarTitle from "../../atoms/NavbarTitle";
// types
import { infoPartner } from "../../../../types/Home";
// others
import "./style.scss";

interface PropTypes {
  arr: Array<infoPartner>;
}

const SingerHot: FC<PropTypes> = (props) => {
  const { arr } = props;

  return (
    <div className="singer-hot-wrapper">
      <NavbarTitle varClass="title" name="NGHỆ SĨ HOT" />
      <div className="singer-in-top">
        <div className="first-singer">
          <img
            src="https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/7/c/5/a/7c5a9d0ec012cb842476b83dbbc96e84.jpg#home_hotartist_01"
            alt="images"
          />
        </div>
        <div className="top-singer">
          {arr.map((item: infoPartner, index) => (
            <img key={index} src={item.image} alt="images" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingerHot;
