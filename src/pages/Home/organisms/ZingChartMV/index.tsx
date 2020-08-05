import React, { FC } from "react";
// libs
import classNames from "classnames";
// components
import SongRankVideo from "../SongRankVideo";
import ZingChartTopic from "../ZingChartTopic";
//others
import "./style.scss";
// types
import { infoSong } from "../../../../types/Home";

interface PropTypes {
  arr: Array<infoSong>;
  weekAlbum: boolean;
  weekNews: boolean;
}

const ZingChartMV: FC<PropTypes> = (props) => {
  const { arr, weekAlbum, weekNews } = props;
  const showTopSong = (arr: Array<infoSong>) =>
    arr.map((item: infoSong, index) => (
      <div
        key={index}
        className={classNames({
          "first-song": index === 0,
          "thumbnail-mv": !weekAlbum,
          "thumbnail-album": weekAlbum,
        })}
      >
        <SongRankVideo
          weekAlbum={weekAlbum}
          item={item}
          index={`${index + 1}`}
        />
      </div>
    ));

  return (
    <div className="zing-chart-mv-wrapper">
      <ZingChartTopic
        weekNews={weekNews}
        name={weekAlbum ? "#ZINGCHART TUẦN - ALBUM" : "#ZINGCHART TUẦN - MV"}
      />
      <div className="song-top">{showTopSong(arr)}</div>
    </div>
  );
};

export default ZingChartMV;
