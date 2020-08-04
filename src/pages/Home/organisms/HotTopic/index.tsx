import React from "react";
import NavbarTitle from "../../atoms/NavbarTitle";
import Topic from "../../molecules/Topic";
import hotTopic from "../../../../mocks/HotTopic";

import "./style.scss";

const HotTopic = (): JSX.Element => (
  <div className="hot-topic-wrapper">
    <NavbarTitle varClass="hot-topic" name="CHỦ ĐỀ HOT" />
    <div className="list-topic">
      {hotTopic.map((item, index) => (
        <img
          key={index}
          className="img-responsive"
          src={item.image}
          alt="image"
        />
      ))}
    </div>
    <Topic
      parentTitle="hot-topic-more"
      parentIcon="icon-topic-hot"
      name="Xem thêm Chủ Đề khác"
      icon="fas fa-chevron-right"
    />
  </div>
);

export default HotTopic;
