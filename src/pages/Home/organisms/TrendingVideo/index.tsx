import React, { FC } from "react";
import NavbarTitle from "../../atoms/NavbarTitle";
import VideoInspired from "../../molecules/VideoInspired";

import "./style.scss";

interface PropTypes {
  arr: Array<object>;
  title: string;
  noSinger: boolean;
  videoHot: boolean;
}

const TrendingVideo: FC<PropTypes> = (props) => {
  const { title, noSinger, arr, videoHot } = props;
  return (
    <div className="trending-video-wrapper">
      <div className="title">
        <NavbarTitle parent="title" name={title} />
      </div>
      <div className={`content ${videoHot && "video-hot"}`}>
        {arr.map((item: any, index: any) => {
          return <VideoInspired key={index} item={item} noSinger={noSinger} />;
        })}
      </div>
    </div>
  );
};

export default TrendingVideo;
