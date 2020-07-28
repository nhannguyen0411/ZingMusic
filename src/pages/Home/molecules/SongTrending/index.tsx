import React, { FC, useState } from "react";
import classNames from "classnames";
import SongInfo from "../SongInfo";
import { useDispatch } from "react-redux";
import { addNewSong } from "../../../../actions/topChart";
import { Button, Modal, Popover } from "antd";
import {
  DownloadOutlined,
  PlusOutlined,
  ShareAltOutlined,
  InstagramFilled,
  FacebookFilled,
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
    image: string;
    view: string;
  };
  length: number;
  index: number;
}

const SongTrending: FC<PropTypes> = (props) => {
  const [visibleAdd, setVisibleAdd] = useState(false);
  const [visibleDownload, setVisibleDownload] = useState(false);
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

  const contentPopover = (
    <div className="popover-wrapper">
      <Button type="link" icon={<InstagramFilled />} size="middle">
        Instagram
      </Button>
      <Button type="link" icon={<FacebookFilled />} size="middle">
        Facebook
      </Button>
    </div>
  );

  const modalDownload = () => {
    return (
      <div className="modal-download-wrapper">
        <div className="modal-top"></div>
        <div className="modal-bottom">
          <div className="content">
            <p>Bạn đang muốn tải bài hát này</p>
            <p>Vui lòng chọn chất lượng mong muốn:</p>
          </div>
          <div className="quality-wrapper">
            <Button type="primary" size="large">
              Tiêu chuẩn
            </Button>
            <Button type="primary" size="large">
              Chất lượng cao
            </Button>
            <Button type="primary" size="large">
              Chất lượng CD
            </Button>
          </div>
        </div>
      </div>
    );
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
        <Button
          onClick={() => setVisibleDownload(true)}
          type="link"
          icon={<DownloadOutlined />}
          size="middle"
        />
        <Button
          //onClick={() => _handleAddNewSong(item)}
          onClick={() => setVisibleAdd(true)}
          type="link"
          icon={<PlusOutlined />}
          size="middle"
        />
        <Popover
          placement="rightBottom"
          content={contentPopover}
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
          {modalDownload()}
        </Modal>
      </div>
    </div>
  );
};

export default SongTrending;
