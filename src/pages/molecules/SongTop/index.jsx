import React from "react";
import SongInfo from "../SongInfo";

import "./style.scss";

const SongTop = (props) => {
  return (
    <div className="song-top-wrapper">
      <img src="https://via.placeholder.com/60" alt="image" />
      <SongInfo />
    </div>
  );
};

export default SongTop;
