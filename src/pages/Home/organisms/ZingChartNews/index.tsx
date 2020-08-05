// libs
import classNames from "classnames";
import React, { FC } from "react";
// components
import ZingChartTopic from "../ZingChartTopic";
import HotNews from "../HotNews";
// types
import { infoNews } from "../../../../types/Home";
// others
import "./style.scss";

interface PropTypes {
  arr: Array<infoNews>;
}

const ZingChartNews: FC<PropTypes> = (props) => {
  const { arr } = props;
  return (
    <div className="zing-chart-news-wrapper">
      <ZingChartTopic name="TIN TỨC ÂM NHẠC" />
      <div className="news-top">
        {arr.map((item: infoNews, index) => (
          <div
            key={index}
            className={classNames({ "first-news": index === 0 })}
          >
            <HotNews item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ZingChartNews;
