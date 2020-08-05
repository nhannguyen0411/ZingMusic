// libs
import { Tooltip } from "antd";
import React, { FC } from "react";
import classNames from "classnames";
// components
import SongInfo from "../SongInfo";
import SongOptions from "../SongOptions";
// types
import { infoSong } from "../../../../types/Home";
// others
import "./style.scss";

interface PropTypes {
  item: infoSong;
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
        <img src={item.image_url} alt="images" />
      </Tooltip>
      <SongInfo noSinger={true} item={item} />
      <div className="overlay">
        <SongOptions fourOptions={false} song={item.song} />
      </div>
    </div>
  );
};

export default SongTrending;
