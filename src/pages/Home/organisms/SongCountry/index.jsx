import React from "react";
import NavbarTitle from "../../atoms/NavbarTitle";
import SongTrending from "../../molecules/SongTrending";

import "./style.scss";

function SongCountry(props) {
  const { title, type, arr } = props;
  return (
    <div className="song-country-wrapper">
      <div className="title">
        <NavbarTitle parent="title" name={title} />
      </div>
      <div className="content">
        {arr.map((item, index) => {
          return (
            <SongTrending
              length={arr.length}
              index={index}
              song={item.song}
              singer={item.singer}
              type={type}
            />
          );
        })}
      </div>
    </div>
  );
}

export default SongCountry;
