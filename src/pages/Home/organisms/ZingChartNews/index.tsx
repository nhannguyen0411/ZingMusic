import React, { FC } from "react";
import ZingChartTopic from "../ZingChartTopic";
import HotNews from "../HotNews";

import "./style.scss";

interface PropTypes {
  arr: Array<string>;
  news: boolean;
}

const ZingChartNews: FC<PropTypes> = (props) => {
  const { arr, news } = props;
  return (
    <div className="zing-chart-news-wrapper">
      <ZingChartTopic news={news} name={`TIN TỨC ÂM NHẠC`} />
      <div className="news-top">
        {arr.map((item: any, index: any) => {
          return item.id === 1 ? (
            <div key={index} className="first-news">
              <HotNews item={item} />
            </div>
          ) : (
            <HotNews key={index} item={item} />
          );
        })}
      </div>
    </div>
  );
};

export default ZingChartNews;
