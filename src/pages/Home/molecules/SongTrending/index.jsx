import React from "react";
import SongInfo from "../SongInfo";

import "./style.scss";

const SongTrending = (props) => {
  const { song, singer, length, index } = props;
  return (
    <div
      className={`song-trending-wrapper ${
        index === length - 1 ? `last-item` : ""
      }`}
    >
      <img src="https://via.placeholder.com/50" alt="image" />
      <SongInfo song={song} singer={singer} />
    </div>
  );
};

export default SongTrending;
