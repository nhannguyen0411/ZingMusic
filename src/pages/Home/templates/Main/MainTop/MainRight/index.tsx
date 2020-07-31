import { Skeleton } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchZingChartAlbumListRequest } from "../../../../../../actions/zingChartAlbum";
import { fetchZingChartMVListRequest } from "../../../../../../actions/zingChartMV";
import { AppState } from "../../../../../../reducers";
import HotTopic from "../../../../organisms/HotTopic";
import MusicForYou from "../../../../organisms/MusicForYou";
import ZingChartMV from "../../../../organisms/ZingChartMV";
import ZingChartNews from "../../../../organisms/ZingChartNews";
import ZingChartSong from "../../../../organisms/ZingChartSong";
import "./style.scss";
import { fetchZingChartNewsListRequest } from "../../../../../../actions/zingChartNews";

const MainRight = () => {
  const dispatch = useDispatch();
  const { zingChartMV, zingChartAlbum, zingChartNews } = useSelector(
    (state: AppState) => state
  );
  const { isLoadingZingChartNews, zingChartNewsList } = zingChartNews;
  const { isLoadingZingChartMV, zingChartMVList } = zingChartMV;
  const { zingChartAlbumList, isLoadingZingChartAlbum } = zingChartAlbum;

  const _handleCallAPI = () => {
    dispatch(fetchZingChartMVListRequest());
    setTimeout(() => {
      dispatch(fetchZingChartAlbumListRequest());
    }, 1000);
    setTimeout(() => {
      dispatch(fetchZingChartNewsListRequest());
    }, 2000);
  };

  useEffect(() => {
    _handleCallAPI();
  }, []);

  return (
    <div className="main-right-wrapper">
      <MusicForYou />
      <HotTopic />
      <ZingChartSong />
      {isLoadingZingChartMV ? (
        <Skeleton active />
      ) : (
        <ZingChartMV
          arr={zingChartMVList.slice(0, 5)}
          weekAlbum={false}
          weekNews={false}
        />
      )}
      {isLoadingZingChartAlbum ? (
        <Skeleton active />
      ) : (
        <ZingChartMV
          arr={zingChartAlbumList.slice(0, 5)}
          weekAlbum={true}
          weekNews={false}
        />
      )}
      {isLoadingZingChartNews ? (
        <Skeleton active />
      ) : (
        <ZingChartNews arr={zingChartNewsList.slice(0, 5)} weekNews={true} />
      )}
    </div>
  );
};

export default MainRight;
