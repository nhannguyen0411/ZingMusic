// libs
import React, { FC } from "react";
// components
import NavbarTitle from "../../atoms/NavbarTitle";
import SongInfoVideo from "../../molecules/SongInfoVideo";
import SeveralRankSong from "../SeveralRankSong";
// types
import { infoSong } from "../../../../types/Home";
// others
import "./style.scss";

interface PropTypes {
  item: infoSong;
  weekAlbum: boolean;
  index: string;
  isZingChartSong: boolean;
}

const FirstSong: FC<PropTypes> = (props) => {
  const { item, weekAlbum, index, isZingChartSong } = props;
  return (
    <div className="first-song-wrapper">
      <img src={item.image_url} alt="images" />
      {isZingChartSong ? (
        <SeveralRankSong item={item} index={index} />
      ) : (
        <div className="overlay-video">
          <NavbarTitle varClass="song-number" name={index.padStart(2, "0")} />
          <SongInfoVideo weekAlbum={weekAlbum} item={item} />
        </div>
      )}
    </div>
  );
};

export default FirstSong;
