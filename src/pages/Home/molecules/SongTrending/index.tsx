import classNames from "classnames";
import React, { FC } from "react";
import SongInfo from "../SongInfo";
import SongOptions from "../SongOptions";
import "./style.scss";
import { Tooltip } from "antd";

type infoSinger = {
  id: Number;
  singer: string;
};

interface PropTypes {
  item: {
    id: Number;
    song: string;
    singer: Array<infoSinger>;
    image_url: string;
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
      <Tooltip
        overlayInnerStyle={{ color: "black" }}
        color="white"
        title={item.song}
      >
        <img src={item.image_url} alt="image" />
      </Tooltip>
      <SongInfo noSinger={false} item={item} />
      <div className="overlay">
        <SongOptions fourOptions={false} song={item.song} />
      </div>
    </div>
  );
};

export default SongTrending;
