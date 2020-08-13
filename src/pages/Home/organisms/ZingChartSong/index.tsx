// libs
import { Skeleton } from "antd";
import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// components
import CountryTopic from "../../molecules/CountryTopic";
import SongRank from "../SongRank";
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
  const { isLoadingZingChartSong, zingChartSongList } = useSelector(
    (state: AppState) => state.zingChartSong
  );

  const initFetch = useCallback(() => {
    dispatch(fetchZingChartSongListRequest("VN"));
  }, [dispatch]);

  useEffect(() => {
    initFetch();
  }, [initFetch]);

  /**
   * Switch country
   * @param {string} country - The name of the country
   */
  const handleChangeCountry = (country: string) => {
    dispatch(fetchZingChartSongListRequest(country));
  };

  const SongRankList = () => (
    <div className="song-top">
      {isLoadingZingChartSong ? (
        <Skeleton active />
      ) : (
        zingChartSongList.map((item: infoSong, index: number) => (
          <SongRank key={index} index={`${index + 1}`} item={item} />
        ))
      )}
    </div>
  );

  return (
    <div className="zing-chart-song-wrapper">
      <CountryTopic
        name="#ZINGCHART TUẦN - BÀI HÁT"
        onHandleChangeCountrySong={handleChangeCountry}
        isSong={true}
      >
        <SongRankList />
      </CountryTopic>
    </div>
  );
};

export default ZingChartSong;
