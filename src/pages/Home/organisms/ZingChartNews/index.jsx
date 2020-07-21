import React from "react";
import ZingChartTopic from "../ZingChartTopic";
import HotNews from "../HotNews";

import "./style.scss";

const ZingChartNews = (props) => {
  const { arr } = props;
  return (
    <div className="zing-chart-news-wrapper">
      <ZingChartTopic name={`TIN TỨC ÂM NHẠC`} />
      <div className="news-top">
        {arr.map((item, index) => {
          return item.id === 1 ? (
            <div key={index} className="first-news">
              <HotNews item={item} />
            </div>
          ) : (
            <HotNews item={item} />
          );
        })}
      </div>
    </div>
  );
};

export default ZingChartNews;
