import React, { useEffect } from "react";
import MainCarousel from "../../../../organisms/MainCarousel";
import TopChart from "../../../../organisms/TopChart";
import TrendingVideo from "../../../../organisms/TrendingVideo";
import SongCountry from "../../../../organisms/SongCountry";
import SingerHot from "../../../../organisms/SingerHot";
import singerHot from "../../../../../../mocks/SingerHot";
import albumHot from "../../../../../../mocks/AlbumHot";
import strangeVideo from "../../../../../../mocks/StrangeVideo";
import { useDispatch, useSelector } from "react-redux";
import { fetchHappyVideoListRequest } from "../../../../../../actions/happyVideo";

import "./styles.scss";
import { AppState } from "../../../../../../reducers";

const MainLeft = () => {
  const { list } = useSelector((state: AppState) => state.happyVideo);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHappyVideoListRequest());
  }, []);

  console.log("list:", list);
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
      <TrendingVideo
        title="LẠ MÀ VUI"
        arr={strangeVideo}
        noSinger={false}
        videoHot={false}
      />
      <TrendingVideo
        title="VIDEO HOT"
        arr={albumHot}
        noSinger={true}
        videoHot={true}
      />
      <TrendingVideo
        title="ALBUM HOT"
        arr={albumHot}
        noSinger={true}
        videoHot={false}
      />
      <div className="section-song-trending">
        <div className="section-left">
          <SongCountry title="NHẠC VIỆT HOT" arr={albumHot} />
        </div>
        <div className="section-right">
          <SongCountry title="NHẠC VIỆT MỚI" arr={albumHot} />
        </div>
      </div>
      <div className="section-singer-hot">
        <SingerHot arr={singerHot} />
      </div>
    </div>
  );
};

export default MainLeft;
