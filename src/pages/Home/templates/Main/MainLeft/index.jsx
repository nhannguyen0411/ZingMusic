import React from "react";
import MainCarousel from "../../../organisms/MainCarousel";
import TopChart from "../../../organisms/TopChart";

import "./styles.scss";
import TrendingVideo from "../../../organisms/TrendingVideo";
import SongCountry from "../../../organisms/SongCountry";

const MainLeft = (props) => {
  const strangeVideo = [
    { id: 1, song: "Mở Đầu Hoàn Hảo" },
    { id: 2, song: "Mở Đầu Hoàn Hảo" },
    { id: 3, song: "Mở Đầu Hoàn Hảo" },
    { id: 4, song: "Mở Đầu Hoàn Hảo" },
    { id: 5, song: "Mở Đầu Hoàn Hảo" },
    { id: 6, song: "Mở Đầu Hoàn Hảo" },
    { id: 7, song: "Mở Đầu Hoàn Hảo" },
    { id: 8, song: "Mở Đầu Hoàn Hảo" },
  ];

  const albumHot = [
    { id: 1, song: "Mở Đầu Hoàn Hảo", singer: "Vũ Duy Khánh" },
    { id: 2, song: "Mở Đầu Hoàn Hảo", singer: "Vũ Duy Khánh" },
    { id: 3, song: "Mở Đầu Hoàn Hảo", singer: "Vũ Duy Khánh" },
    { id: 4, song: "Mở Đầu Hoàn Hảo", singer: "Vũ Duy Khánh" },
    { id: 5, song: "Mở Đầu Hoàn Hảo", singer: "Vũ Duy Khánh" },
    { id: 6, song: "Mở Đầu Hoàn Hảo", singer: "Vũ Duy Khánh" },
    { id: 7, song: "Mở Đầu Hoàn Hảo", singer: "Vũ Duy Khánh" },
    { id: 8, song: "Mở Đầu Hoàn Hảo", singer: "Vũ Duy Khánh" },
    { id: 9, song: "Mở Đầu Hoàn Hảo", singer: "Vũ Duy Khánh" },
    { id: 10, song: "Mở Đầu Hoàn Hảo", singer: "Vũ Duy Khánh" },
    { id: 11, song: "Mở Đầu Hoàn Hảo", singer: "Vũ Duy Khánh" },
    { id: 12, song: "Mở Đầu Hoàn Hảo", singer: "Vũ Duy Khánh" },
  ];

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
    </div>
  );
};

export default MainLeft;
