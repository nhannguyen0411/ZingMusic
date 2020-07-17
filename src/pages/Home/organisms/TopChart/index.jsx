import React from "react";
import NavbarTitle from "../../atoms/NavbarTitle";
import NavbarIcon from "../../atoms/NavbarIcon";
import SongTop from "../../molecules/SongTop";
import SongOptions from "../../molecules/SongOptions";

import "./style.scss";

const TopChart = () => {
  const arr = [
    { id: 1, song: "Cho Anh Say", singer: "Phan Duy Anh, ACV", view: "24,267" },
    {
      id: 2,
      song: "Cứ Thế Rời Xa",
      singer: "Phan Duy Anh, ACV",
      view: "19,562",
    },
    { id: 3, song: "Bigcityboi", singer: "Phan Duy Anh, ACV", view: "17,469" },
    {
      id: 4,
      song: "Cho Anh Say",
      singer: "Phan Duy Anh, ACV",
      view: "12,048",
    },
    {
      id: 5,
      song: "Cứ Thế Rời Xa",
      singer: "Phan Duy Anh, ACV",
      view: "10,866",
    },
  ];
  return (
    <div className="top-chart-wrapper">
      {arr.map((item, index) => {
        return (
          <div key={index} className="song-in-top">
            <NavbarTitle parent="song-number" name={item.id} />
            <NavbarIcon parent="song-divider" icon="fas fa-minus" />
            <SongTop song={item.song} singer={item.singer} />
            <SongOptions />
            <NavbarTitle parent="song-view" name={item.view} />
          </div>
        );
      })}
    </div>
  );
};

export default TopChart;
