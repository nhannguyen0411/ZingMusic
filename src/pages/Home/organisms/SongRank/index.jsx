import React from "react";
import NavbarTitle from "../../atoms/NavbarTitle";
import SongInfo from "../../molecules/SongInfo";

import "./style.scss";

const SongRank = (props) => {
  const { item } = props;
  return (
    <div className="song-rank-wrapper">
      <NavbarTitle
        parent="song-number"
        name={item.id < 10 ? `0${item.id}` : item.id}
      />
      <SongInfo item={item} />
      <NavbarTitle parent="song-view" name={item.view} />
    </div>
  );
};

export default SongRank;
