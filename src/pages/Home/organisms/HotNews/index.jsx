import React from "react";
import NavbarTitle from "../../atoms/NavbarTitle";

import "./style.scss";

const HotNews = (props) => {
  const { item } = props;
  return (
    <div className="hot-news-wrapper">
      <img src={item.image} alt="image" />
      <NavbarTitle name={item.title} />
    </div>
  );
};

export default HotNews;
