// libs
import React from "react";
// components
import FirstSong from "../FirstSong";
import SeveralRankSong from "../SeveralRankSong";
// types
import { infoSong } from "../../../../types/Home";
// others
import "./style.scss";

interface PropTypes {
  item: infoSong;
  index: string;
}

const SongRank = (props: PropTypes) => {
  const { item, index } = props;

  return (
    <div className="song-rank-wrapper">
      {parseInt(index) === 1 ? (
        <FirstSong item={item} index={index} isZingChartSong={true} />
      ) : (
        <SeveralRankSong item={item} index={index} />
      )}
    </div>
  );
};

export default SongRank;
