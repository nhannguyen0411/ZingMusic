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
import { useSelector } from "react-redux";
import { AppState } from "../../../../../../reducers";
import { Skeleton } from "antd";

const MainRight = () => {
  const { zingChartMV } = useSelector((state: AppState) => state);
  const { loadingZingChartMV, zingChartMVList } = zingChartMV;

  return (
    <div className="main-right-wrapper">
      <MusicForYou />
      <HotTopic />
      <ZingChartSong />
      {loadingZingChartMV ? (
        <ZingChartMV
          arr={zingChartMVList.slice(0, 5)}
          weekAlbum={false}
          weekNews={false}
        />
      ) : (
        <Skeleton active />
      )}
      {/* { loadingZingChartMV ? <ZingChartMV arr={album} weekAlbum={true} weekNews={false} /> : <Skeleton active />} */}
      <ZingChartNews arr={news} weekNews={true} />
    </div>
  );
};

export default MainRight;
