import React from "react";
import { Button } from "antd";
import {
  DownloadOutlined,
  PlusOutlined,
  ShareAltOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";

import "./styles.scss";

const SongOptions = () => {
  return (
    <div className="song-options-wrapper">
      <Button type="link" icon={<YoutubeOutlined />} size="middle" />
      <Button type="link" icon={<DownloadOutlined />} size="middle" />
      <Button type="link" icon={<PlusOutlined />} size="middle" />
      <Button type="link" icon={<ShareAltOutlined />} size="middle" />
    </div>
  );
};

export default SongOptions;
