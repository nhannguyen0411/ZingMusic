// libs
import { Skeleton } from "antd";
import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
// components
import HotTopic from "../../../../organisms/HotTopic";
import MusicForYou from "../../../../organisms/MusicForYou";
import ZingChartNews from "../../../../organisms/ZingChartNews";
import ZingChartSong from "../../../../organisms/ZingChartSong";
import ZingChartVideo from "../../../../organisms/ZingChartVideo";
// actions
import { fetchZingChartNewsListRequest } from "../../../../../../actions/zingChartNews";
// reducers
import { AppState } from "../../../../../../reducers";
// others
import "./style.scss";

const MainRight = (): JSX.Element => {
  const dispatch = useDispatch();
  const { isLoadingZingChartNews, zingChartNewsList } = useSelector(
    (state: AppState) => state.zingChartNews
  );

  const initFetch = useCallback(() => {
    dispatch(fetchZingChartNewsListRequest());
  }, [dispatch]);

  useEffect(() => {
    initFetch();
  }, [initFetch]);

  return (
    <div className="main-right-wrapper">
      <MusicForYou />
      <HotTopic />
      <ZingChartSong />

      <ZingChartVideo />

      {isLoadingZingChartNews ? (
        <Skeleton active />
      ) : (
        <ZingChartNews arr={zingChartNewsList.slice(0, 5)} />
      )}
    </div>
  );
};

export default MainRight;
