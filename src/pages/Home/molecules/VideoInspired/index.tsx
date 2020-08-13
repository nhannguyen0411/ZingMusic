// libs
import { Tooltip } from "antd";
import React from "react";
import { PlayCircleOutlined } from "@ant-design/icons";
// components
import SongInfo from "../SongInfo";
// types
import { infoSong } from "../../../../types/Home";
// others
import "./style.scss";

interface PropTypes {
  item: infoSong;
  noSinger: boolean;
}

const VideoInspired = (props: PropTypes) => {
  const { item, noSinger } = props;
  return (
    <div className="video-inspired-wrapper">
      <Tooltip title={item.song}>
        <div className="photo">
          <img src={`${item.image_url}`} alt="images" />
          <div className="overlay">
            <PlayCircleOutlined />
          </div>
        </div>
      </Tooltip>
      <SongInfo noSinger={noSinger} item={item} />
    </div>
  );
};

export default VideoInspired;
