import React from "react";
import NavbarTitle from "../../atoms/NavbarTitle";
import NavbarIcon from "../../atoms/NavbarIcon";
import SongTop from "../../molecules/SongTop";
import SongOptions from "../../molecules/SongOptions";
import weekMV from "../../../../mocks/WeekMV";

import "./style.scss";

const TopChart = () => {
  const arr = [...weekMV];
  return (
    <div className="top-chart-wrapper">
      {arr.map((item: any, index: any) => {
        return (
          <div key={index} className="song-in-top">
            <NavbarTitle varClass="song-number" name={`${item.id}`} />
            <NavbarIcon parent="song-divider" icon="fas fa-minus" />
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
