import React from "react";
import MainCarousel from "../../../../organisms/MainCarousel";
import TopChart from "../../../../organisms/TopChart";
import TrendingVideo from "../../../../organisms/TrendingVideo";
import SongCountry from "../../../../organisms/SongCountry";
import SingerHot from "../../../../organisms/SingerHot";
import singerHot from "../../../../../../mocks/SingerHot";
import albumHot from "../../../../../../mocks/AlbumHot";
import strangeVideo from "../../../../../../mocks/StrangeVideo";

import "./styles.scss";

const MainLeft = (props) => {
  return (
    <div className="main-left-wrapper">
      <MainCarousel />
      <div className="section-zing-chart">
        <img src="https://via.placeholder.com/650x280" alt="image" />
        <div className="song-list">
          <TopChart />
        </div>
      </div>
      <TrendingVideo
        title="LẠ MÀ VUI"
        image="https://via.placeholder.com/150"
        arr={strangeVideo}
        type={false}
        temp={false}
      />
      <TrendingVideo
        title="VIDEO HOT"
        image="https://via.placeholder.com/142x80"
        arr={albumHot}
        type={true}
        temp={true}
      />
      <TrendingVideo
        title="ALBUM HOT"
        image="https://via.placeholder.com/150"
        arr={albumHot}
        type={true}
        temp={false}
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
