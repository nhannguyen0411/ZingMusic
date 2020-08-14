// libs
import React from "react";
// components
import NavbarIcon from "../../atoms/NavbarIcon";
// others
import "./style.scss";

const ImagePlay = (): JSX.Element => (
  <div className="image-play-wrapper">
    <img
      loading="lazy"
      src="https://static-zmp3.zadn.vn/skins/zmp3-v5.1/images/discover_cover_240.jpg"
      alt="image"
    />
    <NavbarIcon parent="icon-play" icon="far fa-play-circle" />
  </div>
);

export default ImagePlay;
