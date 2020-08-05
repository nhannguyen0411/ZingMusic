// libs
import { Skeleton } from "antd";
import classNames from "classnames";
import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
// components
import CountryTopic from "../../molecules/CountryTopic";
import SongRank from "../SongRank";
import ZingChartTopic from "../ZingChartTopic";
// actions
import { fetchZingChartSongListRequest } from "../../../../actions/zingChartSong";
// reducers
import { AppState } from "../../../../reducers";
//types
import { infoSong } from "../../../../types/Home";
// others
import "./style.scss";

const ZingChartSong = (): JSX.Element => {
  const dispatch = useDispatch();
  const { isLoadingZingChartSong, zingChartSongList, country } = useSelector(
    (state: AppState) => state.zingChartSong
  );

  const initFetch = useCallback(() => {
    dispatch(fetchZingChartSongListRequest("VN"));
  }, [dispatch]);

  useEffect(() => {
    initFetch();
  }, [initFetch]);

  const handleChangeCountry = (country: string) => {
    dispatch(fetchZingChartSongListRequest(country));
  };

  const SongRankList = () => (
    <div className="song-top">
      {isLoadingZingChartSong ? (
        <Skeleton active />
      ) : (
        zingChartSongList.map((item: infoSong, index: number) => (
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
        <SongRankList />
      </CountryTopic>
    </div>
  );
};

export default ZingChartSong;
