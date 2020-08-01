import { Skeleton } from "antd";
import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchZingChartSongListRequest } from "../../../../actions/zingChartSong";
import { AppState } from "../../../../reducers";
import CountryTopic from "../../molecules/CountryTopic";
import SongRank from "../SongRank";
import ZingChartTopic from "../ZingChartTopic";
import "./style.scss";

const ZingChartSong = () => {
  const dispatch = useDispatch();
  const { isLoadingZingChartSong, zingChartSongList } = useSelector(
    (state: AppState) => state.zingChartSong
  );

  useEffect(() => {
    dispatch(fetchZingChartSongListRequest("VN"));
  }, []);

  const _handleChangeCountry = (ct: string) => {
    dispatch(fetchZingChartSongListRequest(ct));
  };

  const _handleShowSong = () => {
    return (
      <div className="song-top">
        {isLoadingZingChartSong ? (
          <Skeleton active />
        ) : (
          zingChartSongList.map((item: any, index: number) => {
            return (
              <div
                key={index}
                className={classNames({
                  "first-song": index === 0,
                })}
              >
                <SongRank index={`${index + 1}`} item={item} />
              </div>
            );
          })
        )}
      </div>
    );
  };

  return (
    <div className="zing-chart-song-wrapper">
      <ZingChartTopic name="#ZINGCHART TUẦN - BÀI HÁT" weekNews={false} />
      <CountryTopic onHandleChangeCountry={_handleChangeCountry}>
        {<_handleShowSong />}
      </CountryTopic>
    </div>
  );
};

export default ZingChartSong;
