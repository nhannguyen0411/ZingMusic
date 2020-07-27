import React, { useState, useCallback } from "react";
import { AppState } from "../../../../reducers";
import { useSelector } from "react-redux";
import { Button } from "antd";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { PgUp, PgDown } from "../../../../constant";

import NavbarTitle from "../../atoms/NavbarTitle";
import SongTop from "../../molecules/SongTop";
import SongOptions from "../../molecules/SongOptions";
import useEventListener from "../../../../Hooks/use-event-listener";
import useKeyPress from "../../../../Hooks/use-key-press";

import "./style.scss";

const TopChart = () => {
  const shift = useKeyPress("Shift");
  const pageDown = useKeyPress("PageDown");
  const pageUp = useKeyPress("PageUp");
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
    if (e.keyCode === PgUp && page < list.length / 5) {
      setPage(page + 1);
    } else if (e.keyCode === PgDown && page > 1) {
      setPage(page - 1);
    } else {
      return;
    }
  };

  useEventListener("keydown", _handleMoveOnePage);

  return (
    <div className="top-chart-wrapper">
      <div className={`render-list`}>{_handleShowSong()}</div>
      <div className={`button-wrapper`}>
        <Button
          onClick={() => setPage(page - 1)}
          disabled={page === 1 ? true : false}
          type="primary"
          icon={<MinusOutlined />}
          size="middle"
        />
        <Button
          onClick={() => setPage(page + 1)}
          disabled={page === list.length / 5 ? true : false}
          type="primary"
          icon={<PlusOutlined />}
          size="middle"
        />
      </div>
    </div>
  );
};

export default TopChart;
