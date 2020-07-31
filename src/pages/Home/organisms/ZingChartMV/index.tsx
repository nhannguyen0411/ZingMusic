import React, { FC } from "react";
import ZingChartTopic from "../ZingChartTopic";
import SongRankVideo from "../SongRankVideo";
import CountryTopic from "../../molecules/CountryTopic";
import classNames from "classnames";

import "./style.scss";

type infoSinger = {
  id: number;
  singer: string;
};

type info = {
  id: Number;
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
  const showTopSong = (arr: Array<info>) => {
    return arr.map((item: info, index) => {
      return (
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
      );
    });
  };

  return (
    <div className="zing-chart-mv-wrapper">
      <ZingChartTopic
        weekNews={weekNews}
        name={weekAlbum ? `#ZINGCHART TUẦN - ALBUM` : `#ZINGCHART TUẦN - MV`}
      />
      <CountryTopic />
      <div className="song-top">{showTopSong(arr)}</div>
    </div>
  );
};

export default ZingChartMV;
