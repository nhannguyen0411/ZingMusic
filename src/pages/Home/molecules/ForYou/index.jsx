import React from "react";
import ImagePlay from "../ImagePlay";
import SongInfo from "../SongInfo";

import "./style.scss";

const ForYou = () => {
  return (
    <div className="for-you-wrapper">
      <ImagePlay />
      <SongInfo
        song="Dành Riêng Cho Bạn"
        singer="Nghe những ca khúc yêu thích và khám phá âm nhạc dành riêng cho bạn."
      />
    </div>
  );
};

export default ForYou;
