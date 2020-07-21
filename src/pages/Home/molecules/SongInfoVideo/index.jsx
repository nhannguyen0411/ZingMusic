import React from "react";
import NavbarTitle from "../../atoms/NavbarTitle";

import "./style.scss";

const SongInfoVideo = (props) => {
  const { item, large } = props;
  return (
    <div
      className={large ? "song-info-album-wrapper" : "song-info-video-wrapper"}
    >
      <div className="song-info">
        <NavbarTitle name={item.song} />
        <NavbarTitle name={item.singer} />
      </div>
      <NavbarTitle parent="song-view" name={item.view} />
    </div>
  );
};

export default SongInfoVideo;
