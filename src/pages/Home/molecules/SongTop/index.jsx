import React from "react";
import SongInfo from "../SongInfo";

import "./style.scss";

const SongTop = (props) => {
  const { item } = props;
  return (
    <div className="song-top-wrapper">
      <img src={item.image} alt="image" />
      <SongInfo item={item} />
    </div>
  );
};

export default SongTop;
