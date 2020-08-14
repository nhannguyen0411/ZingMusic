// libs
import React from "react";
// components
import SongInfo from "../SongInfo";
// types
import { infoSong } from "../../../../types/Home";
// others
import "./style.scss";

interface PropTypes {
  item: infoSong;
}

const SongTop = (props: PropTypes) => {
  const { item } = props;
  return (
    <div className="song-top-wrapper">
      <div className="aspect-ratio-169">
        <img loading="lazy" src={`${item.image_url}`} alt="images" />
      </div>
      <SongInfo item={item} />
    </div>
  );
};

export default SongTop;
