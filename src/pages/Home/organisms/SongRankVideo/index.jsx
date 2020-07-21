import React from "react";
import NavbarTitle from "../../atoms/NavbarTitle";
import SongInfoVideo from "../../molecules/SongInfoVideo";

import "./style.scss";

const SongRankVideo = (props) => {
  const { item, large } = props;
  return (
    <div className="song-rank-video-wrapper">
      <div className="video-wrapper">
        <img
          className={large ? "week-album" : "week-mv"}
          src={item.image}
          alt="image"
        />
        <NavbarTitle
          parent="song-number"
          name={item.id < 10 ? `0${item.id}` : item.id}
        />
      </div>
      <SongInfoVideo large={large} item={item} />
    </div>
  );
};

export default SongRankVideo;