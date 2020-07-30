import React, { FC } from "react";
import SongInfo from "../SongInfo";
import { PlayCircleOutlined } from "@ant-design/icons";
import "./style.scss";
import { Tooltip } from "antd";

type infoSinger = {
  id: Number;
  singer: string;
};

interface PropTypes {
  item: {
    image_url: String;
    id: Number;
    song: string;
    singer: Array<infoSinger>;
  };
  noSinger: Boolean;
}

const VideoInspired: FC<PropTypes> = (props) => {
  const { item, noSinger } = props;
  return (
    <div className="video-inspired-wrapper">
      <Tooltip title={item.song}>
        <div className="photo">
          <img src={`${item.image_url}`} alt="image" />
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
