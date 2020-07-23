import React, { FC } from "react";
import NavbarTitle from "../../atoms/NavbarTitle";
import { Link } from "react-router-dom";

import "./style.scss";

interface PropTypes {
  item: {
    id: Number;
    song: string;
    singer: Array<string>;
    view: string;
  };
  weekAlbum: boolean;
}

const SongInfoVideo: FC<PropTypes> = (props) => {
  const { item, weekAlbum } = props;
  return (
    <div
      className={
        weekAlbum ? "song-info-album-wrapper" : "song-info-video-wrapper"
      }
    >
      <div className="song-info-wrapper">
        <Link to={`/product/${item.id}`}>
          <NavbarTitle parent="song" name={item.song} />
        </Link>
        <div className="singer-wrapper">
          {item.singer.map((name: any, index: any) => {
            return (
              <Link to={`/singer/${name.id}`} key={index}>
                <NavbarTitle parent="singer" name={`${name.singer} `} />
              </Link>
            );
          })}
        </div>
      </div>
      <NavbarTitle parent="song-view" name={item.view} />
    </div>
  );
};

export default SongInfoVideo;
