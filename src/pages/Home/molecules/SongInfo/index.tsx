// libs
import { Link } from "react-router-dom";
import React from "react";
// components
import NavbarTitle from "../../atoms/NavbarTitle";
// types
import { infoSinger, infoSong } from "../../../../types/Home";
// others
import "./style.scss";

interface PropTypes {
  item: infoSong;
  noSinger: boolean;
}

const SongInfo = (props: PropTypes) => {
  const { item, noSinger } = props;

  const showSinger = (list: Array<infoSinger>) =>
    list.map((info: infoSinger, index) => (
      <span key={index}>
        <Link to={`/singer/${info.id}`}>
          <NavbarTitle varClass="singer" name={`${info.singer}`} />
        </Link>
        {index < list.length - 1 && <span>, </span>}
      </span>
    ));

  return (
    <div className="song-info-wrapper">
      <Link to={`/product/${item.song_id}`}>
        <NavbarTitle varClass="song" name={item.song} />
      </Link>
      {noSinger && (
        <div className="singer-wrapper">{showSinger(item.singer)}</div>
      )}
    </div>
  );
};

SongInfo.defaultProps = {
  noSinger: true,
};

export default SongInfo;
