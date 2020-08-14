// libs
import React from "react";
import classNames from "classnames";
// components
import NavbarTitle from "../../atoms/NavbarTitle";
import SongInfoVideo from "../../molecules/SongInfoVideo";
// types
import { infoSong } from "../../../../types/Home";
// others
import "./style.scss";

interface PropTypes {
  item: infoSong;
  weekAlbum: boolean;
  index: string;
}

const SeveralRankVideo = (props: PropTypes) => {
  const { item, weekAlbum, index } = props;
  return (
    <div className="several-rank-video-wrapper">
      <div className="video-wrapper">
        <img
          loading="lazy"
          className={classNames({
            "week-album": weekAlbum,
            "week-mv": !weekAlbum,
          })}
          src={item.image_url}
          alt="images"
        />
        <NavbarTitle varClass="song-number" name={index.padStart(2, "0")} />
      </div>
      <SongInfoVideo weekAlbum={weekAlbum} item={item} />
    </div>
  );
};

export default SeveralRankVideo;
