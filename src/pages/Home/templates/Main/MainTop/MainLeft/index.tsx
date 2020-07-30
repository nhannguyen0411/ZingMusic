import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHappyVideoListRequest } from "../../../../../../actions/happyVideo";
import { fetchHotVideoListRequest } from "../../../../../../actions/hotVideo";
import { fetchSongTrendingListRequest } from "../../../../../../actions/songTrending";
import { AppState } from "../../../../../../reducers";

import singerHot from "../../../../../../mocks/SingerHot";
import MainCarousel from "../../../../organisms/MainCarousel";
import SingerHot from "../../../../organisms/SingerHot";
import SongCountry from "../../../../organisms/SongCountry";
import TopChart from "../../../../organisms/TopChart";
import TrendingVideo from "../../../../organisms/TrendingVideo";
import Loading from "../../../../molecules/Antd/Loading";

import "./styles.scss";

const MainLeft = () => {
  const { hotVideo, happyVideo, songTrending } = useSelector(
    (state: AppState) => state
  );
  const { hotVideoList, loadingHotVideo } = hotVideo;
  const { happyVideoList, loadingHappyVideo } = happyVideo;
  const { songTrendingList, loadingSongTrending } = songTrending;

  const dispatch = useDispatch();

  const _handleCallAPI = () => {
    dispatch(fetchHappyVideoListRequest());
    dispatch(fetchHotVideoListRequest());
    dispatch(fetchSongTrendingListRequest());
  };

  useEffect(() => {
    _handleCallAPI();
  });

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
      {loadingHappyVideo ? (
        <TrendingVideo
          title="LẠ MÀ VUI"
          arr={happyVideoList.slice(0, 8)}
          noSinger={false}
          videoHot={false}
        />
      ) : (
        <Loading />
      )}
      {loadingHotVideo ? (
        <TrendingVideo
          title="VIDEO HOT"
          arr={hotVideoList.slice(0, 12)}
          noSinger={false}
          videoHot={true}
        />
      ) : (
        <Loading />
      )}
      {loadingHotVideo ? (
        <TrendingVideo
          title="ALBUM HOT"
          arr={hotVideoList.slice(0, 12)}
          noSinger={false}
          videoHot={false}
        />
      ) : (
        <Loading />
      )}
      <div className="section-song-trending">
        <div className="section-left">
          {loadingSongTrending ? (
            <SongCountry
              title="NHẠC VIỆT HOT"
              arr={songTrendingList.slice(0, 10)}
            />
          ) : (
            <Loading />
          )}
        </div>
        <div className="section-right">
          {loadingSongTrending ? (
            <SongCountry
              title="NHẠC VIỆT MỚI"
              arr={songTrendingList.slice(0, 10)}
            />
          ) : (
            <Loading />
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
