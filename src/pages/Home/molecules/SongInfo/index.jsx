import React from "react";
import NavbarTitle from "../../atoms/NavbarTitle";
import { Link } from "react-router-dom";

import "./style.scss";

const SongInfo = (props) => {
  const { item } = props;
  return (
    <div className="song-info-wrapper">
      <Link to={`/product/${item.id}`}>
        <NavbarTitle parent="song" name={item.song} />
      </Link>
      <div className="singer-wrapper">
        {item.singer.map((item, index) => (
          <Link key={index} to={`/singer/${item}`}>
            <NavbarTitle parent="singer" name={`${item} `} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SongInfo;
