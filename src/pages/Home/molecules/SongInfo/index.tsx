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
}

const SongInfo: FC<PropTypes> = (props) => {
  const { item } = props;
  return (
    <div className="song-info-wrapper">
      <Link to={`/product/${item.id}`}>
        <NavbarTitle parent="song" name={item.song} />
      </Link>
      <div className="singer-wrapper">
        {item.singer.map((info: any, index: any) => (
          <Link key={index} to={`/singer/${info.id}`}>
            <NavbarTitle parent="singer" name={`${info.singer} `} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SongInfo;
