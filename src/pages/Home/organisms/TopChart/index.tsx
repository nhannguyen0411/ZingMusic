import { MinusOutlined } from "@ant-design/icons";
import { Pagination, Skeleton } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTopChartListRequest } from "../../../../actions/topChart";
import { PgDown, PgUp } from "../../../../constant";
import useEventListener from "../../../../Hooks/use-event-listener";
import { AppState } from "../../../../reducers";
import NavbarTitle from "../../atoms/NavbarTitle";
import SongOptions from "../../molecules/SongOptions";
import SongTop from "../../molecules/SongTop";
import "./style.scss";

type infoSinger = {
  id: number;
  singer: string;
};

type info = {
  title: string;
  song: string;
  song_id: string;
  image_url: string;
  singer: Array<infoSinger>;
};

const TopChart = (): JSX.Element => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const { list, isLoading } = useSelector((state: AppState) => state.topChart);

  useEffect(() => {
    dispatch(fetchTopChartListRequest());
  }, []);

  const _handleShowSong = () => {
    const perPage = 5;
    const begin = (page - 1) * perPage;
    const end = page * perPage;
    return list.slice(begin, end).map((item: info, index: number) => (
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

  const _handleMoveOnePage = (e: { shiftKey?: string; keyCode?: number }) => {
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

  useEventListener("keydown", _handleMoveOnePage);

  return (
    <div className="top-chart-wrapper">
      <div className="render-list">
        {isLoading ? <Skeleton active /> : _handleShowSong()}
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
