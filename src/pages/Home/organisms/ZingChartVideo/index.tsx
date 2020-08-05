// hooks
import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
// libs
import { Skeleton } from "antd";
// components
import ZingChartMV from "../ZingChartMV";
import CountryTopic from "../../molecules/CountryTopic";
// actions
import { fetchZingChartMVListRequest } from "../../../../actions/zingChartMV";
import { fetchZingChartAlbumListRequest } from "../../../../actions/zingChartAlbum";
// reducers
import type { AppState } from "../../../../reducers";

const ZingChartVideo = (): JSX.Element => {
  const { zingChartMV, zingChartAlbum } = useSelector(
    (state: AppState) => state
  );
  const { isLoadingZingChartMV, zingChartMVList } = zingChartMV;
  const { zingChartAlbumList, isLoadingZingChartAlbum } = zingChartAlbum;
  const dispatch = useDispatch();

  const initFetch = useCallback(() => {
    dispatch(fetchZingChartMVListRequest("MV", "VN"));
    setTimeout(() => {
      dispatch(fetchZingChartAlbumListRequest("album", "VN"));
    }, 1000);
  }, [dispatch]);

  useEffect(() => {
    initFetch();
  }, [initFetch]);

  const handleChangeCountry = (
    category: string,
    country: string,
    isAlbum: boolean
  ) => {
    dispatch(
      isAlbum
        ? fetchZingChartAlbumListRequest(category, country)
        : fetchZingChartMVListRequest(category, country)
    );
  };
  return (
    <div className="zing-chart-video-wrapper">
      <CountryTopic
        onHandleChangeCountrySong={() => console.log("haha")}
        onHandleChangeCountryVideo={handleChangeCountry}
        isSong={false}
        isAlbum={false}
      >
        {isLoadingZingChartMV ? (
          <Skeleton active />
        ) : (
          <ZingChartMV
            arr={zingChartMVList.slice(0, 5)}
            weekAlbum={false}
            weekNews={false}
          />
        )}
      </CountryTopic>
      <CountryTopic
        onHandleChangeCountrySong={() => console.log("haha")}
        onHandleChangeCountryVideo={handleChangeCountry}
        isSong={false}
        isAlbum={true}
      >
        {isLoadingZingChartAlbum ? (
          <Skeleton active />
        ) : (
          <ZingChartMV
            arr={zingChartAlbumList.slice(0, 5)}
            weekAlbum={true}
            weekNews={false}
          />
        )}
      </CountryTopic>
    </div>
  );
};

export default ZingChartVideo;
