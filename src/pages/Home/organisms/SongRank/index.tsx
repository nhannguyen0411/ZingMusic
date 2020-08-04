import React, { FC } from "react";
import NavbarTitle from "../../atoms/NavbarTitle";
import SongInfo from "../../molecules/SongInfo";
import SongOptions from "../../molecules/SongOptions";
import "./style.scss";

type infoSinger = {
  id: number;
  singer: string;
};

interface PropTypes {
  item: {
    title: string;
    song: string;
    song_id: string;
    image_url: string;
    singer: Array<infoSinger>;
  };
  index: string;
}

const SongRank: FC<PropTypes> = (props) => {
  const { item, index } = props;

  return (
    <div className="song-rank-wrapper">
      <div className="content">
        <NavbarTitle varClass="song-number" name={index.padStart(2, "0")} />
        <SongInfo noSinger={true} item={item} />
        <NavbarTitle varClass="song-view" name={item.song_id.slice(0, 4)} />
      </div>
      <div className="overlay">
        <SongOptions song={item.song} fourOptions={false} />
      </div>
    </div>
  );
};

export default SongRank;
