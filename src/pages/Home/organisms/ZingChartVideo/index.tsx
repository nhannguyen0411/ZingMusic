import React, { useEffect } from "react";
import CountryTopic from "../../molecules/CountryTopic";
import { Skeleton } from "antd";
import ZingChartMV from "../ZingChartMV";
import { fetchZingChartMVListRequest } from "../../../../actions/zingChartMV";
import { fetchZingChartAlbumListRequest } from "../../../../actions/zingChartAlbum";
import { useDispatch, useSelector } from "react-redux";
import type { AppState } from "../../../../reducers";

const ZingChartVideo = (): JSX.Element => {
  const { zingChartMV, zingChartAlbum } = useSelector(
    (state: AppState) => state
  );
  const { isLoadingZingChartMV, zingChartMVList } = zingChartMV;
  const { zingChartAlbumList, isLoadingZingChartAlbum } = zingChartAlbum;
  const dispatch = useDispatch();

  const _handleCallAPI = () => {
    dispatch(fetchZingChartMVListRequest("MV", "VN"));
    setTimeout(() => {
      dispatch(fetchZingChartAlbumListRequest("album", "VN"));
    }, 1000);
  };

  useEffect(() => {
    _handleCallAPI();
  }, []);

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
