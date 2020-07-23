import React, { FC } from "react";
import NavbarTitle from "../../atoms/NavbarTitle";

import "./style.scss";

interface PropTypes {
  item: {
    image: String;
    id: Number;
    song: string;
    singer: Array<string>;
  };
  type: Boolean;
}

const VideoInspired: FC<PropTypes> = (props) => {
  const { item, type } = props;
  return (
    <div className="video-inspired-wrapper">
      <div className="photo">
        <img src={`${item.image}`} alt="image" />
        <div className="overlay">
          <i className="far fa-play-circle"></i>
        </div>
      </div>
      <div className="song-info-wrapper">
        <NavbarTitle parent="song" name={item.song} />
        {type && (
          <div className="singer-wrapper">
            {item.singer.map((info: any, index: any) => (
              <NavbarTitle
                key={index}
                parent="singer"
                name={`${info.singer} `}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoInspired;
