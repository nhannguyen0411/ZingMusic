import { Skeleton } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchZingChartNewsListRequest } from "../../../../../../actions/zingChartNews";
import { AppState } from "../../../../../../reducers";
import HotTopic from "../../../../organisms/HotTopic";
import MusicForYou from "../../../../organisms/MusicForYou";
import ZingChartNews from "../../../../organisms/ZingChartNews";
import ZingChartSong from "../../../../organisms/ZingChartSong";
import ZingChartVideo from "../../../../organisms/ZingChartVideo";
import "./style.scss";

const MainRight = (): JSX.Element => {
  const dispatch = useDispatch();
  const { isLoadingZingChartNews, zingChartNewsList } = useSelector(
    (state: AppState) => state.zingChartNews
  );

  useEffect(() => {
    setTimeout(() => {
      dispatch(fetchZingChartNewsListRequest());
    }, 2000);
  }, []);

  return (
    <div className="main-right-wrapper">
      <MusicForYou />
      <HotTopic />
      <ZingChartSong />

      <ZingChartVideo />

      {isLoadingZingChartNews ? (
        <Skeleton active />
      ) : (
        <ZingChartNews arr={zingChartNewsList.slice(0, 5)} weekNews={true} />
      )}
    </div>
  );
};

export default MainRight;
