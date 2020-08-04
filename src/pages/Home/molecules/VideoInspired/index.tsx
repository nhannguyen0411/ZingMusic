import React, { FC } from "react";
import SongInfo from "../SongInfo";
import { PlayCircleOutlined } from "@ant-design/icons";
import "./style.scss";
import { Tooltip } from "antd";

type infoSinger = {
  id: number;
  singer: string;
};

interface PropTypes {
  item: {
    title: string;
    song: string;
    song_id: string;
    image_url: string;
    singer: Array<infoSinger>;
  };
  noSinger: boolean;
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
