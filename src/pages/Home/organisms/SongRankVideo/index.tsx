import React, { FC } from "react";
import classNames from "classnames";
import NavbarTitle from "../../atoms/NavbarTitle";
import SongInfoVideo from "../../molecules/SongInfoVideo";

import "./style.scss";

type infoSinger = {
  id: number;
  singer: string;
};

interface PropTypes {
  item: {
    id: number;
    image_url: string;
    song: string;
    singer: Array<infoSinger>;
    song_id: string;
  };
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
          alt="image"
        />
        <NavbarTitle varClass="song-number" name={index.padStart(2, "0")} />
      </div>
      <SongInfoVideo weekAlbum={weekAlbum} item={item} />
    </div>
  );
};

export default SongRankVideo;
