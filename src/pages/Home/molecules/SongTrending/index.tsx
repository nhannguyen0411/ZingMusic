import React, { FC } from "react";
import classNames from "classnames";
import SongInfo from "../SongInfo";
import {
  DownloadOutlined,
  PlusOutlined,
  ShareAltOutlined,
} from "@ant-design/icons";

import "./style.scss";

interface PropTypes {
  item: {
    id: Number;
    song: string;
    singer: Array<string>;
  };
  length: number;
  index: number;
}

const SongTrending: FC<PropTypes> = (props) => {
  const { item, length, index } = props;
  return (
    <div
      className={classNames("song-trending-wrapper", {
        "last-item": index === length - 1,
      })}
    >
      <img src="https://via.placeholder.com/50" alt="image" />
      <SongInfo noSinger={true} item={item} />
      <div className="overlay">
        <DownloadOutlined />
        <PlusOutlined />
        <ShareAltOutlined />
      </div>
    </div>
  );
};

export default SongTrending;
