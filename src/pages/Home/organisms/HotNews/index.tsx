import React, { FC } from "react";
import NavbarTitle from "../../atoms/NavbarTitle";

import "./style.scss";

interface PropTypes {
  item: {
    image_url: string;
    id: Number;
    title: string;
  };
}

const HotNews: FC<PropTypes> = (props) => {
  const { item } = props;
  return (
    <div className="hot-news-wrapper">
      <img src={item.image_url} alt="image" />
      <NavbarTitle varClass="hot-news" name={item.title} />
    </div>
  );
};

export default HotNews;
