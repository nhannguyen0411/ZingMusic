import React, { FC } from "react";
import ZingChartTopic from "../ZingChartTopic";
import HotNews from "../HotNews";

import "./style.scss";

interface PropTypes {
  arr: Array<object>;
  weekNews: boolean;
}

const ZingChartNews: FC<PropTypes> = (props) => {
  const { arr, weekNews } = props;
  return (
    <div className="zing-chart-news-wrapper">
      <ZingChartTopic weekNews={weekNews} name={`TIN TỨC ÂM NHẠC`} />
      <div className="news-top">
        {arr.map((item: any, index) => {
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
