// libs
import { Skeleton } from "antd";
import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
// components
import MainCarousel from "../../../../organisms/MainCarousel";
import SingerHot from "../../../../organisms/SingerHot";
import TopChart from "../../../../organisms/TopChart";
import TrendingVideo from "../../../../organisms/TrendingVideo";
import SectionSongTrending from "pages/Home/organisms/SectionSongTrending";
// actions
import { fetchHappyVideoListRequest } from "../../../../../../actions/happyVideo";
import { fetchHotVideoListRequest } from "../../../../../../actions/hotVideo";
// reducers
import { AppState } from "../../../../../../reducers";
// mocks
import singerHot from "../../../../../../mocks/SingerHot";
// others
import "./styles.scss";

const MainLeft = (): JSX.Element => {
  const { hotVideo, happyVideo } = useSelector((state: AppState) => state);
  const { hotVideoList, isLoadingHotVideo } = hotVideo;
  const { happyVideoList, isLoadingHappyVideo } = happyVideo;

  const dispatch = useDispatch();

  const initFetch = useCallback(() => {
    dispatch(fetchHappyVideoListRequest());
    setTimeout(() => {
      dispatch(fetchHotVideoListRequest());
    }, 1000);
  }, [dispatch]);

  useEffect(() => {
    initFetch();
  }, [initFetch]);

  return (
    <div className="main-left-wrapper">
      <MainCarousel />
      <div className="section-zing-chart">
        <img
          className="img-zing-chart"
          src={require("../../../../../../images/zingchart.PNG")}
          alt="images"
        />
        <div className="song-list">
          <TopChart />
        </div>
      </div>
      {isLoadingHappyVideo ? (
        <Skeleton active />
      ) : (
        <TrendingVideo
          title="LẠ MÀ VUI"
          arr={happyVideoList.slice(0, 8)}
          noSinger={false}
        />
      )}
      {isLoadingHotVideo ? (
        <Skeleton active />
      ) : (
        <TrendingVideo
          title="VIDEO HOT"
          arr={hotVideoList.slice(0, 12)}
          videoHot={true}
        />
      )}
      {isLoadingHotVideo ? (
        <Skeleton active />
      ) : (
        <TrendingVideo title="ALBUM HOT" arr={hotVideoList.slice(0, 12)} />
      )}
      <SectionSongTrending />
      <div className="section-singer-hot">
        <SingerHot arr={singerHot} />
      </div>
    </div>
  );
};

export default MainLeft;
