// libs
import React, { FC } from "react";
// components
import NavbarTitle from "../../atoms/NavbarTitle";
import SongInfo from "../../molecules/SongInfo";
import SongOptions from "../../molecules/SongOptions";
//types
import { infoSong } from "../../../../types/Home";
// others
import "./style.scss";

interface PropTypes {
  item: infoSong;
  index: string;
}

const SeveralRankSong: FC<PropTypes> = (props) => {
  const { item, index } = props;
  return (
    <div className="several-rank-song-wrapper">
      <div className="content">
        <NavbarTitle varClass="song-number" name={index.padStart(2, "0")} />
        <SongInfo noSinger={true} item={item} />
        <NavbarTitle varClass="song-view" name={item.song_id.slice(0, 4)} />
      </div>
      <div className="overlay-song">
        <SongOptions song={item.song} fourOptions={false} />
      </div>
    </div>
  );
};

export default SeveralRankSong;
