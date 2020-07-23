import React, { FC } from "react";
import NavbarTitle from "../../atoms/NavbarTitle";
import SongTrending from "../../molecules/SongTrending";
import "./style.scss";

interface PropTypes {
  arr: Array<string>;
  title: string;
}

const SongCountry: FC<PropTypes> = (props) => {
  const { title, arr } = props;
  return (
    <div className="song-country-wrapper">
      <div className="title">
        <NavbarTitle parent="title" name={title} />
      </div>
      <div className="content">
        {arr.map((item: any, index: any) => {
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
