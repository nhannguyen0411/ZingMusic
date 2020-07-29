import React, { FC } from "react";
import { Button } from "antd";

interface PropTypes {
  song: string;
}

const ModalDownload: FC<PropTypes> = (props) => {
  const { song } = props;
  return (
    <div className="modal-download-wrapper">
      <div className="modal-top"></div>
      <div className="modal-bottom">
        <div className="content">
          <p>Bạn đang muốn tải bài hát {song}</p>
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

export default ModalDownload;
