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
    id: Number;
    image: string;
    song: string;
    singer: Array<infoSinger>;
    view: string;
  };
  weekAlbum: boolean;
}

const SongRankVideo: FC<PropTypes> = (props) => {
  const { item, weekAlbum } = props;
  return (
    <div className="song-rank-video-wrapper">
      <div className="video-wrapper">
        <img
          className={classNames({
            "week-album": weekAlbum,
            "week-mv": !weekAlbum,
          })}
          src={item.image}
          alt="image"
        />
        <NavbarTitle
          varClass="song-number"
          name={item.id.toString().padStart(2, "0")}
        />
      </div>
      <SongInfoVideo weekAlbum={weekAlbum} item={item} />
    </div>
  );
};

export default SongRankVideo;
