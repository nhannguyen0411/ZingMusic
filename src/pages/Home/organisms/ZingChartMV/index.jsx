import React from "react";
import ZingChartTopic from "../ZingChartTopic";
import SongRankVideo from "../SongRankVideo";
import CountryTopic from "../../molecules/CountryTopic";

import "./style.scss";

const ZingChartMV = (props) => {
  const { arr, large } = props;
  return (
    <div className="zing-chart-mv-wrapper">
      <ZingChartTopic
        name={large ? `#ZINGCHART TUẦN - ALBUM` : `#ZINGCHART TUẦN - MV`}
      />
      <CountryTopic />
      <div className="song-top">
        {arr.map((item, index) => {
          return item.id === 1 ? (
            <div
              key={index}
              className="first-song"
              style={
                large
                  ? {
                      backgroundImage:
                        "url(https://photo-zmp3.zadn.vn/banner/3/2/b/5/32b5075d3b0a907f9a2a257ae04233a6.jpg)",
                    }
                  : {
                      backgroundImage:
                        "url(https://photo-zmp3.zadn.vn/banner/d/9/7/7/d977bd1206dffc2ac00d4a4d760971cd.jpg)",
                    }
              }
            >
              <SongRankVideo large={large} item={item} />
            </div>
          ) : (
            <SongRankVideo large={large} key={index} item={item} />
          );
        })}
      </div>
    </div>
  );
};

export default ZingChartMV;
