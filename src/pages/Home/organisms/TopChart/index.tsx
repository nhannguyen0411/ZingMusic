// libs
import { MinusOutlined } from "@ant-design/icons";
import { Pagination, Skeleton } from "antd";
import React, { useEffect, useState, useCallback } from "react";
import useEventListener from "../../../../Hooks/useEventListener";
import { useDispatch, useSelector } from "react-redux";
// components
import NavbarTitle from "../../atoms/NavbarTitle";
import SongOptions from "../../molecules/SongOptions";
import SongTop from "../../molecules/SongTop";
// actions
import { fetchTopChartListRequest } from "../../../../actions/topChart";
// reducers
import { AppState } from "../../../../reducers";
// types
import { infoSong } from "../../../../types/Home";
// others
import { PgDown, PgUp } from "../../../../constant";
import "./style.scss";

const TopChart = (): JSX.Element => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const { list, isLoading } = useSelector((state: AppState) => state.topChart);

  const initFetch = useCallback(() => {
    dispatch(fetchTopChartListRequest());
  }, [dispatch]);

  useEffect(() => {
    initFetch();
  }, [initFetch]);

  /**
   * Show list song
   */
  const handleShowSong = () => {
    const perPage = 5;
    const begin = (page - 1) * perPage;
    const end = page * perPage;
    return list.slice(begin, end).map((item: infoSong, index: number) => (
      <div key={index} className="song-in-top">
        <NavbarTitle varClass="song-number" name={`${index + 1 + begin}`} />
        <MinusOutlined />
        <SongTop item={item} />
        <SongOptions fourOptions={true} song={item.song} />
        <NavbarTitle
          varClass="song-view"
          name={`${item.song_id.slice(0, 5)}`}
        />
      </div>
    ));
  };

  /**
   * Increase or Decrease page by press Page Up or Page Down
   * @param {Object} e - Event DOM
   */
  const _handleMovePage = (e: { shiftKey?: string; keyCode?: number }) => {
    const { keyCode } = e;
    const listLength = list.length;
    switch (true) {
      case keyCode === PgUp && e.shiftKey: {
        setPage(listLength / 5);
        //e.shiftKey && setPage(listLength / 5);
        break;
      }
      case keyCode === PgDown && e.shiftKey: {
        setPage(1);
        //e.shiftKey && setPage(1);
        break;
      }
      case keyCode === PgUp: {
        page < listLength / 5 && setPage(page + 1);
        break;
      }
      case keyCode === PgDown: {
        page > 1 && setPage(page - 1);
        break;
      }
    }
  };

  useEventListener("keydown", _handleMovePage);

  return (
    <div className="top-chart-wrapper">
      <div className="render-list">
        {isLoading ? <Skeleton active /> : handleShowSong()}
      </div>
      <div className="pagination-wrapper">
        {!isLoading && (
          <Pagination
            onChange={(page) => {
              setPage(page);
            }}
            defaultPageSize={5}
            defaultCurrent={page}
            current={page}
            total={list.length}
          />
        )}
      </div>
    </div>
  );
};

export default TopChart;
