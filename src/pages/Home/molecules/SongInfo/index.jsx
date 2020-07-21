import React from "react";
import NavbarTitle from "../../atoms/NavbarTitle";

import "./style.scss";

const SongInfo = (props) => {
  const { song, singer } = props;
  return (
    <div className="song-info-wrapper">
      <NavbarTitle parent="song" name={song} />
      <div className="singer-wrapper">
        {singer.map((item, index) => (
          <NavbarTitle parent="singer" key={index} name={`${item} `} />
        ))}
      </div>
    </div>
  );
};

export default SongInfo;
