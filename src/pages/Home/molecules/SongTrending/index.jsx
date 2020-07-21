import React from "react";
import SongInfo from "../SongInfo";

import "./style.scss";

const SongTrending = (props) => {
  const { item, length, index } = props;
  return (
    <div
      className={`song-trending-wrapper ${
        index === length - 1 ? `last-item` : ""
      }`}
    >
      <img src="https://via.placeholder.com/50" alt="image" />
      <SongInfo item={item} />
    </div>
  );
};

export default SongTrending;
