import React, { FC } from "react";
import NavbarTitle from "../../atoms/NavbarTitle";
import SongInfo from "../../molecules/SongInfo";
import { useDispatch } from "react-redux";
import { addNewSong } from "../../../../actions/topChart";
import { Button } from "antd";
import {
  DownloadOutlined,
  PlusOutlined,
  ShareAltOutlined,
} from "@ant-design/icons";

import "./style.scss";

type infoSinger = {
  id: Number;
  singer: string;
};

interface PropTypes {
  item: {
    id: Number;
    song: string;
    singer: Array<infoSinger>;
    view: string;
  };
}

const SongRank: FC<PropTypes> = (props) => {
  const { item } = props;
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
    <div className="song-rank-wrapper">
      <div className="content">
        <NavbarTitle
          varClass="song-number"
          name={item.id.toString().padStart(2, "0")}
        />
        <SongInfo noSinger={true} item={item} />
        <NavbarTitle varClass="song-view" name={item.view} />
      </div>
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

export default SongRank;
