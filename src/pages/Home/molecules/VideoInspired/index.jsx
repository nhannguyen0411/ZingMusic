import React from "react";
import NavbarTitle from "../../atoms/NavbarTitle";

import "./style.scss";

const VideoInspired = (props) => {
  const { song, singer, type, image } = props;
  return (
    <div className="video-inspired-wrapper">
      <img src={image} alt="image" />
      <div className="song-info">
        <NavbarTitle name={song} />
        {type && <NavbarTitle name={singer} />}
      </div>
    </div>
  );
};

export default VideoInspired;
