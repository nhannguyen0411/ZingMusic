// libs
import { Skeleton } from "antd";
import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchZingChartAlbumListRequest } from "../../../../actions/zingChartAlbum";
// components
import ZingChartMV from "../ZingChartMV";
import CountryTopic from "../../molecules/CountryTopic";
// actions
import { fetchZingChartMVListRequest } from "../../../../actions/zingChartMV";
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
    dispatch(fetchZingChartAlbumListRequest("album", "VN"));
  }, [dispatch]);

  useEffect(() => {
    initFetch();
  }, [initFetch]);

  /**
   * Switch country
   * @param {string} category - The name of the category
   * @param {string} country - The name of the country
   * @param {boolean} isAlbum - Base on this to send album or mv request.
   */
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
        name="#ZINGCHART TUẦN - MV"
        onHandleChangeCountryVideo={handleChangeCountry}
      >
        {isLoadingZingChartMV ? (
          <Skeleton active />
        ) : (
          <ZingChartMV arr={zingChartMVList.slice(0, 5)} />
        )}
      </CountryTopic>
      <CountryTopic
        name="#ZINGCHART TUẦN - ALBUM"
        onHandleChangeCountryVideo={handleChangeCountry}
        isAlbum={true}
      >
        {isLoadingZingChartAlbum ? (
          <Skeleton active />
        ) : (
          <ZingChartMV arr={zingChartAlbumList.slice(0, 5)} weekAlbum={true} />
        )}
      </CountryTopic>
    </div>
  );
};

export default ZingChartVideo;
