// libs
import React from "react";
// components
import NavbarTitle from "../../atoms/NavbarTitle";
import SongTrending from "../../molecules/SongTrending";
// types
import { infoSong } from "../../../../types/Home";
// others
import "./style.scss";

interface PropTypes {
  arr: Array<infoSong>;
  title: string;
}

const SongCountry = (props: PropTypes) => {
  const { title, arr } = props;
  return (
    <div className="song-country-wrapper">
      <div className="title">
        <NavbarTitle varClass="title" name={title} />
      </div>
      <div className="content">
        {arr.map((item: infoSong, index) => (
          <SongTrending
            length={arr.length}
            key={index}
            index={index}
            item={item}
          />
        ))}
      </div>
    </div>
  );
};

export default SongCountry;
