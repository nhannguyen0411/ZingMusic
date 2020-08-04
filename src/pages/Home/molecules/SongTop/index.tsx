import React, { FC } from "react";
import SongInfo from "../SongInfo";

import "./style.scss";
type infoSinger = {
  id: number;
  singer: string;
};

interface PropTypes {
  item: {
    title: string;
    song: string;
    song_id: string;
    image_url: string;
    singer: Array<infoSinger>;
  };
}

const SongTop: FC<PropTypes> = (props) => {
  const { item } = props;
  return (
    <div className="song-top-wrapper">
      <img src={`${item.image_url}`} alt="image" />
      <SongInfo noSinger={true} item={item} />
    </div>
  );
};

export default SongTop;
