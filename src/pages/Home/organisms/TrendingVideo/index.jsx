import React from "react";
import NavbarTitle from "../../atoms/NavbarTitle";
import VideoInspired from "../../molecules/VideoInspired";

import "./style.scss";

function TrendingVideo(props) {
  const { title, type, arr, image, temp } = props;
  return (
    <div className="trending-video-wrapper">
      <div className="title">
        <NavbarTitle parent="title" name={title} />
      </div>
      <div className={`content ${temp && "video-hot"}`}>
        {arr.map((item, index) => {
          return (
            <VideoInspired
              image={image}
              key={index}
              song={item.song}
              singer={item.singer}
              type={type}
            />
          );
        })}
      </div>
    </div>
  );
}

export default TrendingVideo;
