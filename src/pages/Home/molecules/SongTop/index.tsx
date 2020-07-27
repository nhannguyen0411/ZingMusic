import React, { FC } from "react";
import SongInfo from "../SongInfo";

import "./style.scss";
type infoSinger = {
  id: Number;
  singer: string;
};

interface PropTypes {
  item: {
    id: Number;
    song: string;
    singer: Array<infoSinger>;
    image: string;
    view: number;
  };
}

const SongTop: FC<PropTypes> = (props) => {
  const { item } = props;
  return (
    <div className="song-top-wrapper">
      <img src={`${item.image}`} alt="image" />
      <SongInfo noSinger={true} item={item} />
    </div>
  );
};

export default SongTop;
