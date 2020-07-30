import React, { FC } from "react";
import NavbarTitle from "../../atoms/NavbarTitle";
import SongTrending from "../../molecules/SongTrending";
import "./style.scss";

type infoSinger = {
  id: Number;
  singer: string;
};

type info = {
  id: number;
  song: string;
  singer: Array<infoSinger>;
  image_url: string;
};

interface PropTypes {
  arr: Array<info>;
  title: string;
}

const SongCountry: FC<PropTypes> = (props) => {
  const { title, arr } = props;
  return (
    <div className="song-country-wrapper">
      <div className="title">
        <NavbarTitle varClass="title" name={title} />
      </div>
      <div className="content">
        {arr.map((item: info, index) => {
          return (
            <SongTrending
              length={arr.length}
              key={index}
              index={index}
              item={item}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SongCountry;
