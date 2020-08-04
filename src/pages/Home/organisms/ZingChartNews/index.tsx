import React, { FC } from "react";
import ZingChartTopic from "../ZingChartTopic";
import HotNews from "../HotNews";
import classNames from "classnames";

import "./style.scss";

type info = {
  id: number;
  image_url: string;
  title: string;
};

interface PropTypes {
  arr: Array<info>;
  weekNews: boolean;
}

const ZingChartNews: FC<PropTypes> = (props) => {
  const { arr, weekNews } = props;
  return (
    <div className="zing-chart-news-wrapper">
      <ZingChartTopic weekNews={weekNews} name="TIN TỨC ÂM NHẠC" />
      <div className="news-top">
        {arr.map((item: info, index) => (
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
