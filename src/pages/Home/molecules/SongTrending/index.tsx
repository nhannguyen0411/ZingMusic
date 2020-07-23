import React, { FC } from "react";
import SongInfo from "../SongInfo";

import "./style.scss";

interface PropTypes {
  item: {
    id: Number;
    song: string;
    singer: Array<string>;
  };
  length: number;
  index: number;
}

const SongTrending: FC<PropTypes> = (props) => {
  const { item, length, index } = props;
  return (
    <div
      className={`song-trending-wrapper ${
        index === length - 1 ? `last-item` : ""
      }`}
    >
      <img src="https://via.placeholder.com/50" alt="image" />
      <SongInfo item={item} />
      <div className="overlay">
        <i className="fas fa-download"></i>
        <i className="fas fa-plus"></i>
        <i className="fas fa-share-alt"></i>
      </div>
    </div>
  );
};

export default SongTrending;
