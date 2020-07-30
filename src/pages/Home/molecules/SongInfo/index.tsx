import React, { FC } from "react";
import { Link } from "react-router-dom";
import NavbarTitle from "../../atoms/NavbarTitle";
import "./style.scss";

type infoSinger = {
  id: Number;
  singer: string;
};

interface PropTypes {
  item: {
    id: Number;
    song: string;
    singer: Array<infoSinger>;
  };
  noSinger: Boolean;
}

const SongInfo: FC<PropTypes> = (props) => {
  const { item, noSinger } = props;

  const showSinger = (list: Array<infoSinger>) => {
    return list.map((info: infoSinger, index) => {
      return (
        <span key={index}>
          <Link to={`/singer/${info.id}`}>
            <NavbarTitle varClass="singer" name={`${info.singer}`} />
          </Link>
          {index < list.length - 1 && <span>, </span>}
        </span>
      );
    });
  };

  return (
    <div className="song-info-wrapper">
      <Link to={`/product/${item.id}`}>
        <NavbarTitle varClass="song" name={item.song} />
      </Link>
      {noSinger && (
        <div className="singer-wrapper">{showSinger(item.singer)}</div>
      )}
    </div>
  );
};

export default SongInfo;
