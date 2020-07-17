import React from "react";
import NavbarTitle from "../../atoms/NavbarTitle";

import "./style.scss";

const SongInfo = (props) => {
  const { song, singer } = props;
  return (
    <div className="song-info">
      <NavbarTitle name={song} />
      <NavbarTitle name={singer} />
    </div>
  );
};

export default SongInfo;
