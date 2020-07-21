import React from "react";
import NavbarIcon from "../../atoms/NavbarIcon";

import "./style.scss";

const ImagePlay = () => {
  return (
    <div className="image-play-wrapper">
      <img
        src="https://static-zmp3.zadn.vn/skins/zmp3-v5.1/images/discover_cover_240.jpg"
        alt="image"
      />
      <NavbarIcon parent="icon-play" icon="far fa-play-circle" />
    </div>
  );
};

export default ImagePlay;
