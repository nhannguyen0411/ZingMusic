import React from "react";
import MusicForYou from "../../../../organisms/MusicForYou";
import HotTopic from "../../../../organisms/HotTopic";
import ZingChartSong from "../../../../organisms/ZingChartSong";
import ZingChartMV from "../../../../organisms/ZingChartMV";
import mv from "../../../../../../mocks/WeekMV";
import album from "../../../../../../mocks/WeekAlbum";
import news from "../../../../../../mocks/WeekNews";

import "./style.scss";
import ZingChartNews from "../../../../organisms/ZingChartNews";

const MainRight = () => {
  return (
    <div className="main-right-wrapper">
      <MusicForYou />
      <HotTopic />
      <ZingChartSong />
      <ZingChartMV arr={mv} weekAlbum={false} weekNews={false} />
      <ZingChartMV arr={album} weekAlbum={true} weekNews={false} />
      <ZingChartNews arr={news} weekNews={true} />
    </div>
  );
};

export default MainRight;
