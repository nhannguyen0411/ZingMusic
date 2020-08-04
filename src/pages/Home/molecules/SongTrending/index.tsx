import classNames from "classnames";
import React, { FC } from "react";
import SongInfo from "../SongInfo";
import SongOptions from "../SongOptions";
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
      <SongInfo noSinger={true} item={item} />
      <div className="overlay">
        <SongOptions fourOptions={false} song={item.song} />
      </div>
    </div>
  );
};

export default SongTrending;
