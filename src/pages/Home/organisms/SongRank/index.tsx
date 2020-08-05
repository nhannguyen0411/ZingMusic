// libs
import React, { FC } from "react";
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

const SongRank: FC<PropTypes> = (props) => {
  const { item, index } = props;

  return (
    <div className="song-rank-wrapper">
      {parseInt(index) === 1 ? (
        <FirstSong
          item={item}
          index={index}
          isZingChartSong={true}
          weekAlbum={false}
        />
      ) : (
        <SeveralRankSong item={item} index={index} />
      )}
    </div>
  );
};

export default SongRank;
