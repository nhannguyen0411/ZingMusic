import React, { FC } from "react";
import SongInfo from "../SongInfo";
import "./style.scss";

interface PropTypes {
  item: {
    image: String;
    id: Number;
    song: string;
    singer: Array<string>;
  };
  noSinger: Boolean;
}

const VideoInspired: FC<PropTypes> = (props) => {
  const { item, noSinger } = props;
  return (
    <div className="video-inspired-wrapper">
      <div className="photo">
        <img src={`${item.image}`} alt="image" />
        <div className="overlay">
          <i className="far fa-play-circle"></i>
        </div>
      </div>
      <SongInfo noSinger={noSinger} item={item} />
    </div>
  );
};

export default VideoInspired;
