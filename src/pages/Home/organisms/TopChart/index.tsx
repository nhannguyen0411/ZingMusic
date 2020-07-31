import { MinusOutlined } from "@ant-design/icons";
import { Pagination, Skeleton } from "antd";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { PgDown, PgUp } from "../../../../constant";

import { fetchTopChartListRequest } from "../../../../actions/topChart";
import { AppState } from "../../../../reducers";
import NavbarTitle from "../../atoms/NavbarTitle";
import SongOptions from "../../molecules/SongOptions";
import SongTop from "../../molecules/SongTop";
import useEventListener from "../../../../Hooks/use-event-listener";
import "./style.scss";
import Loading from "../../molecules/Antd/Loading";

const TopChart = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const { list, isLoading } = useSelector((state: AppState) => state.topChart);

  useEffect(() => {
    dispatch(fetchTopChartListRequest());
  }, []);

  type infoSinger = {
    id: Number;
    singer: string;
  };

  type info = {
    id: number;
    song: string;
    singer: Array<infoSinger>;
    image_url: string;
    song_id: string;
  };

  const _handleShowSong = () => {
    let perPage = 5;
    let begin = (page - 1) * perPage;
    let end = page * perPage;
    return list.slice(begin, end).map((item: info, index: number) => {
      return (
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
      );
    });
  };

  const _handleMoveOnePage = (e: any) => {
    const { key } = e;
    const listLength = list.length;
    switch (key) {
      case PgUp: {
        page < listLength / 5 && setPage(page + 1);
        e.shiftKey && setPage(listLength / 5);
        break;
      }
      case PgDown: {
        page > 1 && setPage(page - 1);
        e.shiftKey && setPage(1);
        break;
      }
    }
  };

  useEventListener("keydown", _handleMoveOnePage);

  return (
    <div className="top-chart-wrapper">
      <div className={`render-list`}>
        {isLoading ? <Skeleton active /> : _handleShowSong()}
      </div>
      <div className={`pagination-wrapper`}>
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
