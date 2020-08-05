// libs
import { Link } from "react-router-dom";
import React, { FC } from "react";
import classNames from "classnames";
// components
import NavbarTitle from "../../atoms/NavbarTitle";
// types
import { infoSong, infoSinger } from "../../../../types/Home";
// others
import "./style.scss";

interface PropTypes {
  item: infoSong;
  weekAlbum: boolean;
}

const SongInfoVideo: FC<PropTypes> = (props) => {
  const { item, weekAlbum } = props;

  return (
    <div
      className={classNames({
        "song-info-album-wrapper": weekAlbum,
        "song-info-video-wrapper": !weekAlbum,
      })}
    >
      <div className="song-info-wrapper">
        <Link to={`/product/${item.song_id}`}>
          <NavbarTitle varClass="song" name={item.song} />
        </Link>
        <div className="singer-wrapper">
          {item.singer.map((name: infoSinger, index) => (
            <Link to={`/singer/${name.id}`} key={index}>
              <NavbarTitle varClass="singer" name={`${name.singer}`} />
              {index < item.singer.length - 1 && <span>, </span>}
            </Link>
          ))}
        </div>
      </div>
      <NavbarTitle varClass="song-view" name={item.song_id} />
    </div>
  );
};

export default SongInfoVideo;
