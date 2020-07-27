import React from "react";
import NavbarTitle from "../../atoms/NavbarTitle";
import { MinusOutlined } from "@ant-design/icons";
import SongTop from "../../molecules/SongTop";
import SongOptions from "../../molecules/SongOptions";
import { useSelector } from "react-redux";
//import topChart from "../../../../mocks/TopChart";

import "./style.scss";
import { AppState } from "../../../../reducers";

const TopChart = () => {
  const { list } = useSelector((state: AppState) => state.topChart);
  return (
    <div className="top-chart-wrapper">
      {list.map((item: any, index) => {
        return (
          <div key={index} className="song-in-top">
            <NavbarTitle varClass="song-number" name={`${index + 1}`} />
            <MinusOutlined />
            <SongTop item={item} />
            <SongOptions />
            <NavbarTitle varClass="song-view" name={item.view} />
          </div>
        );
      })}
    </div>
  );
};

export default TopChart;
