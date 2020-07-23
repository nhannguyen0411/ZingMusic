import React, { FC } from "react";
import NavbarTitle from "../../atoms/NavbarTitle";
import { Link } from "react-router-dom";

import "./style.scss";

interface PropTypes {
  item: {
    id: Number;
    song: string;
    singer: Array<string>;
  };
  noSinger: Boolean;
}

const SongInfo: FC<PropTypes> = (props) => {
  const { item, noSinger } = props;

  const showSinger = (list: any) => {
    return list.map((info: any, index: any) => {
      if (list.length > 1 && index < list.length - 1) {
        return (
          <span key={index}>
            <Link to={`/singer/${info.id}`}>
              <NavbarTitle varClass="singer" name={`${info.singer}`} />
            </Link>
            <span>, </span>
          </span>
        );
      } else {
        return (
          <Link key={index} to={`/singer/${info.id}`}>
            <NavbarTitle varClass="singer" name={`${info.singer}`} />
          </Link>
        );
      }
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
