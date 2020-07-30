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

const ZingChartSong = () => {
  const dispatch = useDispatch();
  const { loadingZingChartSong, zingChartSongList } = useSelector(
    (state: AppState) => state.zingChartSong
  );

  useEffect(() => {
    dispatch(fetchZingChartSongListRequest());
  });

  return (
    <div className="zing-chart-song-wrapper">
      <ZingChartTopic name="#ZINGCHART TUẦN - BÀI HÁT" weekNews={false} />
      <CountryTopic />
      <div className="song-top">
        {loadingZingChartSong ? (
          zingChartSongList.slice(0, 10).map((item: any, index: number) => {
            return (
              <div
                key={index}
                className={classNames({
                  "first-song": item.id === 1,
                })}
              >
                <SongRank item={item} />
              </div>
            );
          })
        ) : (
          <Skeleton active />
        )}
      </div>
    </div>
  );
};

export default ZingChartSong;
