import classNames from "classnames";
import React, { FC } from "react";
import SongRankVideo from "../SongRankVideo";
import ZingChartTopic from "../ZingChartTopic";
import "./style.scss";
type infoSinger = {
  id: number;
  singer: string;
};

type info = {
  id: number;
  image_url: string;
  song: string;
  singer: Array<infoSinger>;
  song_id: string;
};

interface PropTypes {
  arr: Array<info>;
  weekAlbum: boolean;
  weekNews: boolean;
}

const ZingChartMV: FC<PropTypes> = (props) => {
  const { arr, weekAlbum, weekNews } = props;
  const showTopSong = (arr: Array<info>) =>
    arr.map((item: info, index) => (
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
