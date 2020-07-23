import React from "react";
import ZingChartTopic from "../ZingChartTopic";
import SongRank from "../SongRank";
import CountryTopic from "../../molecules/CountryTopic";
import zingChartSong from "../../../../mocks/ZingChartSong";

import "./style.scss";

const ZingChartSong = () => {
  const arr = [...zingChartSong];
  return (
    <div className="zing-chart-song-wrapper">
      <ZingChartTopic name="#ZINGCHART TUẦN - BÀI HÁT" weekNews={false} />
      <CountryTopic />
      <div className="song-top">
        {arr.map((item: any, index: any) => {
          return item.id === 1 ? (
            <div key={index} className="first-song">
              <SongRank item={item} />
            </div>
          ) : (
            <SongRank key={index} item={item} />
          );
        })}
      </div>
    </div>
  );
};

export default ZingChartSong;
