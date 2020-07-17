import React from "react";
import NavbarTitle from "../../atoms/NavbarTitle";

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
      <div className="song-info">
        <NavbarTitle name={song} />
        <NavbarTitle name={singer} />
      </div>
    </div>
  );
};

export default SongTrending;
