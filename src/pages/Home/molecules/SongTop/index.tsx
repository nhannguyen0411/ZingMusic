import React, { FC } from "react";
import SongInfo from "../SongInfo";

import "./style.scss";

interface PropTypes {
  item: {
    id: Number;
    song: string;
    singer: Array<string>;
    image: string;
  };
}

const SongTop: FC<PropTypes> = (props) => {
  const { item } = props;
  return (
    <div className="song-top-wrapper">
      <img src={`${item.image}`} alt="image" />
      <SongInfo noSinger={false} item={item} />
    </div>
  );
};

export default SongTop;
