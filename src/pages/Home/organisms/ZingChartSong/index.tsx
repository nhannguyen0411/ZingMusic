import { Skeleton } from "antd";
import classNames from "classnames";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchZingChartSongListRequest } from "../../../../actions/zingChartSong";
import { AppState } from "../../../../reducers";
import CountryTopic from "../../molecules/CountryTopic";
import SongRank from "../SongRank";
import ZingChartTopic from "../ZingChartTopic";
import "./style.scss";

type infoSinger = {
  id: number;
  singer: string;
};

type info = {
  title: string;
  song: string;
  song_id: string;
  image_url: string;
  singer: Array<infoSinger>;
};

const ZingChartSong = (): JSX.Element => {
  const dispatch = useDispatch();
  const { isLoadingZingChartSong, zingChartSongList, country } = useSelector(
    (state: AppState) => state.zingChartSong
  );

  useEffect(() => {
    dispatch(fetchZingChartSongListRequest("VN"));
  }, []);

  const handleChangeCountry = (country: string) => {
    dispatch(fetchZingChartSongListRequest(country));
  };

  const handleShowSong = () => (
    <div className="song-top">
      {isLoadingZingChartSong ? (
        <Skeleton active />
      ) : (
        zingChartSongList.map((item: info, index: number) => (
          <div
            key={index}
            className={classNames({
              "first-song": index === 0,
              "US-UK": country === "US-UK",
              "K-Pop": country === "K-Pop",
              "Viet-Nam": country === "VN",
            })}
          >
            <SongRank index={`${index + 1}`} item={item} />
          </div>
        ))
      )}
    </div>
  );

  return (
    <div className="zing-chart-song-wrapper">
      <ZingChartTopic name="#ZINGCHART TUẦN - BÀI HÁT" weekNews={false} />
      <CountryTopic
        onHandleChangeCountrySong={handleChangeCountry}
        onHandleChangeCountryVideo={() => console.log("haha")}
        isSong={true}
        isAlbum={false}
      >
        {handleShowSong()}
      </CountryTopic>
    </div>
  );
};

export default ZingChartSong;
