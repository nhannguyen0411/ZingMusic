// libs
import React from "react";
// components
import SeveralRankVideo from "../SeveralRankVideo";
import FirstSong from "../FirstSong";
// types
import { infoSong } from "../../../../types/Home";
// others
import "./style.scss";

interface PropTypes {
  item: infoSong;
  index: string;
  weekAlbum: boolean;
}

const SongRankVideo = (props: PropTypes) => {
  const { item, weekAlbum, index } = props;
  return (
    <div className="song-rank-video-wrapper">
      {parseInt(index) === 1 ? (
        <FirstSong index={index} item={item} weekAlbum={weekAlbum} />
      ) : (
        <SeveralRankVideo item={item} weekAlbum={weekAlbum} index={index} />
      )}
    </div>
  );
};

export default SongRankVideo;
