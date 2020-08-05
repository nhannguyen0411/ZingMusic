// libs
import React, { FC } from "react";
// components
import SongInfo from "../SongInfo";
// types
import { infoSong } from "../../../../types/Home";
// others
import "./style.scss";

interface PropTypes {
  item: infoSong;
}

const SongTop: FC<PropTypes> = (props) => {
  const { item } = props;
  return (
    <div className="song-top-wrapper">
      <img src={`${item.image_url}`} alt="images" />
      <SongInfo noSinger={true} item={item} />
    </div>
  );
};

export default SongTop;
