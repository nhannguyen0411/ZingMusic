import { Skeleton } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHappyVideoListRequest } from "../../../../../../actions/happyVideo";
import { fetchHotVideoListRequest } from "../../../../../../actions/hotVideo";
import { fetchSongTrendingListRequest } from "../../../../../../actions/songTrending";
import singerHot from "../../../../../../mocks/SingerHot";
import { AppState } from "../../../../../../reducers";
import MainCarousel from "../../../../organisms/MainCarousel";
import SingerHot from "../../../../organisms/SingerHot";
import SongCountry from "../../../../organisms/SongCountry";
import TopChart from "../../../../organisms/TopChart";
import TrendingVideo from "../../../../organisms/TrendingVideo";
import "./styles.scss";

const MainLeft = () => {
  const { hotVideo, happyVideo, songTrending } = useSelector(
    (state: AppState) => state
  );
  const { hotVideoList, isLoadingHotVideo } = hotVideo;
  const { songTrendingList, isLoadingSongTrending } = songTrending;
  const { happyVideoList, isLoadingHappyVideo } = happyVideo;

  const dispatch = useDispatch();

  const _handleCallAPI = () => {
    dispatch(fetchHappyVideoListRequest());
    setTimeout(() => {
      dispatch(fetchHotVideoListRequest());
    }, 1000);
    setTimeout(() => {
      dispatch(fetchSongTrendingListRequest());
    }, 2000);
  };

  useEffect(() => {
    _handleCallAPI();
  }, []);

  return (
    <div className="main-left-wrapper">
      <MainCarousel />
      <div className="section-zing-chart">
        <img
          className="img-zing-chart"
          src={require("../../../../../../images/zingchart.PNG")}
          alt="image"
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
          videoHot={false}
        />
      )}
      {isLoadingHotVideo ? (
        <Skeleton active />
      ) : (
        <TrendingVideo
          title="VIDEO HOT"
          arr={hotVideoList.slice(0, 12)}
          noSinger={true}
          videoHot={true}
        />
      )}
      {isLoadingHotVideo ? (
        <Skeleton active />
      ) : (
        <TrendingVideo
          title="ALBUM HOT"
          arr={hotVideoList.slice(0, 12)}
          noSinger={true}
          videoHot={false}
        />
      )}
      <div className="section-song-trending">
        <div className="section-left">
          {isLoadingSongTrending ? (
            <Skeleton active />
          ) : (
            <SongCountry
              title="NHẠC VIỆT HOT"
              arr={songTrendingList.slice(0, 10)}
            />
          )}
        </div>
        <div className="section-right">
          {isLoadingSongTrending ? (
            <Skeleton active />
          ) : (
            <SongCountry
              title="NHẠC VIỆT MỚI"
              arr={songTrendingList.slice(0, 10)}
            />
          )}
        </div>
      </div>
      <div className="section-singer-hot">
        <SingerHot arr={singerHot} />
      </div>
    </div>
  );
};

export default MainLeft;
