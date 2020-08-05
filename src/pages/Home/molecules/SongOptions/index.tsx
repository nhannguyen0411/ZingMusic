// libs
import {
  DownloadOutlined,
  PlusOutlined,
  ShareAltOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import { Button, Modal, Popover } from "antd";
import React, { FC, useState } from "react";
// components
import ContentPopover from "../Antd/ContentPopover";
import ModalDownload from "../Antd/ModalDownload";
// others
import "./styles.scss";

interface PropTypes {
  song: string;
  fourOptions: boolean;
}

const SongOptions: FC<PropTypes> = (props) => {
  const { song, fourOptions } = props;
  const [visibleAdd, setVisibleAdd] = useState(false);
  const [visibleDownload, setVisibleDownload] = useState(false);

  return (
    <div className="song-options-wrapper">
      {fourOptions && (
        <Button type="link" icon={<YoutubeOutlined />} size="middle" />
      )}
      <Button
        onClick={() => setVisibleDownload(true)}
        type="link"
        icon={<DownloadOutlined />}
        size="middle"
      />
      <Button
        onClick={() => setVisibleAdd(true)}
        type="link"
        icon={<PlusOutlined />}
        size="middle"
      />
      <Popover
        placement="rightBottom"
        content={<ContentPopover />}
        title={null}
        trigger="click"
      >
        <Button type="link" icon={<ShareAltOutlined />} size="middle" />
      </Popover>

      <Modal
        title="Đăng Nhập"
        visible={visibleAdd}
        onCancel={() => setVisibleAdd(false)}
        footer={null}
        width={216}
        centered={true}
      >
        <Button type="primary">Đăng nhập bằng Zalo</Button>
      </Modal>

      <Modal
        visible={visibleDownload}
        onCancel={() => setVisibleDownload(false)}
        footer={null}
        centered={true}
      >
        <ModalDownload song={song} />
      </Modal>
    </div>
  );
};

export default SongOptions;
