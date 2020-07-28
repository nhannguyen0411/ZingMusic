import React, { useState } from "react";
import { AppState } from "../../../../reducers";
import { useSelector } from "react-redux";
import { Pagination } from "antd";
import { MinusOutlined } from "@ant-design/icons";
import { PgUp, PgDown } from "../../../../constant";

import NavbarTitle from "../../atoms/NavbarTitle";
import SongTop from "../../molecules/SongTop";
import SongOptions from "../../molecules/SongOptions";
import useEventListener from "../../../../Hooks/use-event-listener";

import "./style.scss";

const TopChart = () => {
  const [page, setPage] = useState(1);
  const { list } = useSelector((state: AppState) => state.topChart);

  type infoSinger = {
    id: Number;
    singer: string;
  };

  type info = {
    id: number;
    song: string;
    singer: Array<infoSinger>;
    image: string;
    view: number;
  };

  const _handleShowSong = () => {
    const newList = [...list];
    let perPage = 5;
    let begin = (page - 1) * perPage;
    let end = page * perPage;
    return newList.slice(begin, end).map((item: info, index) => {
      return (
        <div key={index} className="song-in-top">
          <NavbarTitle varClass="song-number" name={`${item.id}`} />
          <MinusOutlined />
          <SongTop item={item} />
          <SongOptions />
          <NavbarTitle varClass="song-view" name={`${item.view}`} />
        </div>
      );
    });
  };

  const _handleMoveOnePage = (e: any) => {
    const keyCode = e.key;
    const listLength = list.length;
    switch (keyCode) {
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
      default:
        break;
    }
  };

  useEventListener("keydown", _handleMoveOnePage);

  return (
    <div className="top-chart-wrapper">
      <div className={`render-list`}>{_handleShowSong()}</div>
      <div className={`pagination-wrapper`}>
        <Pagination
          onChange={(page) => {
            setPage(page);
          }}
          defaultPageSize={5}
          defaultCurrent={page}
          current={page}
          total={list.length}
        />
      </div>
    </div>
  );
};

export default TopChart;
