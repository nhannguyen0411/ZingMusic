import React, { FC } from "react";
import NavbarTitle from "../../atoms/NavbarTitle";
import SongInfoVideo from "../../molecules/SongInfoVideo";

import "./style.scss";

interface PropTypes {
  item: {
    id: Number;
    image: string;
    song: string;
    singer: Array<string>;
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
          className={weekAlbum ? "week-album" : "week-mv"}
          src={`${item.image}`}
          alt="image"
        />
        <NavbarTitle
          parent="song-number"
          name={item.id < 10 ? `0${item.id}` : `${item.id}`}
        />
      </div>
      <SongInfoVideo weekAlbum={weekAlbum} item={item} />
    </div>
  );
};

export default SongRankVideo;
