import React from "react";
import NavbarTitle from "../../atoms/NavbarTitle";

import "./style.scss";

const SongInfo = (props) => {
  return (
    <div className="song-info">
      <NavbarTitle name="Cho Anh Say" />
      <NavbarTitle name="Phan Duy Anh, ACV" />
    </div>
  );
};

export default SongInfo;
