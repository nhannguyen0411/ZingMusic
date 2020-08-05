// libs
import React, { FC } from "react";
// components
import SongRankVideo from "../SongRankVideo";
// types
import { infoSong } from "../../../../types/Home";
//others
import "./style.scss";

interface PropTypes {
  arr: Array<infoSong>;
  weekAlbum: boolean;
}

const ZingChartMV: FC<PropTypes> = (props) => {
  const { arr, weekAlbum } = props;
  const TopSongList = () => (
    <div className="song-top">
      {arr.map((item: infoSong, index) => (
        <SongRankVideo
          weekAlbum={weekAlbum}
          item={item}
          index={`${index + 1}`}
        />
      ))}
    </div>
  );

  return (
    <div className="zing-chart-mv-wrapper">
      <TopSongList />
    </div>
  );
};

export default ZingChartMV;
