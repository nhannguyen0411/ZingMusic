import React, { FC } from "react";
// libs
import classNames from "classnames";
// components
import NavbarTitle from "../../atoms/NavbarTitle";
import SongInfoVideo from "../../molecules/SongInfoVideo";
// others
import "./style.scss";
import { infoSong } from "../../../../types/Home";

interface PropTypes {
  item: infoSong;
  index: string;
  weekAlbum: boolean;
}

const SongRankVideo: FC<PropTypes> = (props) => {
  const { item, weekAlbum, index } = props;
  return (
    <div className="song-rank-video-wrapper">
      <div className="video-wrapper">
        <img
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

export default SongRankVideo;
