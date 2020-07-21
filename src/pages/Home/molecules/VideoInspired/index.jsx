import React from "react";
import NavbarTitle from "../../atoms/NavbarTitle";

import "./style.scss";

const VideoInspired = (props) => {
  const { song, singer, type, image } = props;
  return (
    <div className="video-inspired-wrapper">
      <div className="photo">
        <img src={image} alt="image" />
        <div className="overlay">
          <i class="far fa-play-circle"></i>
        </div>
      </div>
      <div className="song-info-wrapper">
        <NavbarTitle parent="song" name={song} />
        {type && (
          <div className="singer-wrapper">
            {singer.map((item, index) => (
              <NavbarTitle key={index} parent="singer" name={`${item} `} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoInspired;
