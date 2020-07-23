import React, { FC } from "react";
import NavbarTitle from "../../atoms/NavbarTitle";
import SongInfo from "../../molecules/SongInfo";
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
    view: string;
  };
}

const SongRank: FC<PropTypes> = (props) => {
  const { item } = props;
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
        <DownloadOutlined />
        <PlusOutlined />
        <ShareAltOutlined />
      </div>
    </div>
  );
};

export default SongRank;
