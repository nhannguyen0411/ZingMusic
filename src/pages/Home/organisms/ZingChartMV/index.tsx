// libs
import React from "react";
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

const ZingChartMV = (props: PropTypes) => {
  const { arr, weekAlbum } = props;
  const TopSongList = () => (
    <div className="song-top">
      {arr.map((item: infoSong, index) => (
        <SongRankVideo
          key={index}
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

ZingChartMV.defaultProps = {
  weekAlbum: false,
};

export default ZingChartMV;
