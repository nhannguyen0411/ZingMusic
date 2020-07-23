import React, { FC } from "react";
import NavbarTitle from "../../atoms/NavbarTitle";
import VideoInspired from "../../molecules/VideoInspired";

import "./style.scss";

interface PropTypes {
  arr: Array<string>;
  title: string;
  temp: boolean;
  type: boolean;
}

const TrendingVideo: FC<PropTypes> = (props) => {
  const { title, type, arr, temp } = props;
  return (
    <div className="trending-video-wrapper">
      <div className="title">
        <NavbarTitle parent="title" name={title} />
      </div>
      <div className={`content ${temp && "video-hot"}`}>
        {arr.map((item: any, index: any) => {
          return <VideoInspired key={index} item={item} type={type} />;
        })}
      </div>
    </div>
  );
};

export default TrendingVideo;
