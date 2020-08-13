// libs
import { Skeleton } from "antd";
import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
// components
import SongCountry from "../SongCountry";
// reducers
import { AppState } from "reducers";
// actions
import { fetchSongTrendingListRequest } from "actions/songTrending";

const SectionSongTrending = () => {
  const { songTrendingList, isLoadingSongTrending } = useSelector(
    (state: AppState) => state.songTrending
  );

  const dispatch = useDispatch();

  const initFetch = useCallback(() => {
    setTimeout(() => {
      dispatch(fetchSongTrendingListRequest());
    }, 2000);
  }, [dispatch]);

  useEffect(() => {
    initFetch();
  }, [initFetch]);

  return (
    <div className="section-song-trending">
      <div className="section-left">
        {isLoadingSongTrending ? (
          <Skeleton active />
        ) : (
          <SongCountry
            title="NHẠC VIỆT HOT"
            arr={songTrendingList.slice(0, 10)}
          />
        )}
      </div>
      <div className="section-right">
        {isLoadingSongTrending ? (
          <Skeleton active />
        ) : (
          <SongCountry
            title="NHẠC VIỆT MỚI"
            arr={songTrendingList.slice(0, 10)}
          />
        )}
      </div>
    </div>
  );
};

export default SectionSongTrending;
