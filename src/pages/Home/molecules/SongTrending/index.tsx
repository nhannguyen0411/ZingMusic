import React, { FC } from "react";
import classNames from "classnames";
import SongInfo from "../SongInfo";
import { useDispatch } from "react-redux";
import { addNewSong } from "../../../../actions/topChart";
import { Button } from "antd";
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
    image: string;
    view: string;
  };
  length: number;
  index: number;
}

const SongTrending: FC<PropTypes> = (props) => {
  const { item, length, index } = props;
  const dispatch = useDispatch();

  const _handleAddNewSong = (item: any) => {
    const newSong = {
      id: item.id,
      song: item.song,
      singer: item.singer,
      image: item.image,
      view: item.view,
    };

    const action = addNewSong(newSong);
    dispatch(action);
  };

  return (
    <div
      className={classNames("song-trending-wrapper", {
        "last-item": index === length - 1,
      })}
    >
      <img src={item.image} alt="image" />
      <SongInfo noSinger={true} item={item} />
      <div className="overlay">
        <Button type="link" icon={<DownloadOutlined />} size="middle" />
        <Button
          onClick={() => _handleAddNewSong(item)}
          type="link"
          icon={<PlusOutlined />}
          size="middle"
        />
        <Button type="link" icon={<ShareAltOutlined />} size="middle" />
      </div>
    </div>
  );
};

export default SongTrending;
