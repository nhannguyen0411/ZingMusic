import React, { FC } from "react";
import NavbarTitle from "../../atoms/NavbarTitle";
import SongInfo from "../../molecules/SongInfo";

import "./style.scss";

interface PropTypes {
  item: {
    id: Number;
    song: string;
    singer: Array<string>;
    view: string;
  };
}

const SongRank: FC<PropTypes> = (props) => {
  const { item } = props;
  return (
    <div className="song-rank-wrapper">
      <NavbarTitle
        parent="song-number"
        name={item.id < 10 ? `0${item.id}` : `${item.id}`}
      />
      <SongInfo noSinger={false} item={item} />
      <NavbarTitle parent="song-view" name={item.view} />
    </div>
  );
};

export default SongRank;
