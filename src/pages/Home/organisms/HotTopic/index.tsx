import React from "react";
import NavbarTitle from "../../atoms/NavbarTitle";
import Topic from "../../molecules/Topic";

import "./style.scss";

const HotTopic = () => {
  const arr = [
    {
      id: 1,
      image:
        "https://photo-zmp3.zadn.vn/cover/6/0/8/d/608d6474b6daa5563eb5c088ca08cc98.jpg",
    },
    {
      id: 2,
      image:
        "https://photo-zmp3.zadn.vn/cover/5/3/8/0/53801ebaa05e57320f06954927896a69.jpg",
    },
    {
      id: 3,
      image:
        "https://photo-zmp3.zadn.vn/covers/2/a/2ac9d9aa479519e1724db5b860373578_1499827968.jpg",
    },
    {
      id: 4,
      image:
        "https://photo-zmp3.zadn.vn/cover/7/c/9/5/7c95f7f7eb049f6d635df1df7a8c7284.jpg",
    },
    {
      id: 5,
      image:
        "https://photo-zmp3.zadn.vn/covers/d/0/d0f7e500d9a338062095f7f66ed669ff_1516330401.jpg",
    },
  ];

  return (
    <div className="hot-topic-wrapper">
      <NavbarTitle parent="hot-topic" name="CHỦ ĐỀ HOT" />
      <div className="list-topic">
        {arr.map((item: any, index: any) => {
          return (
            <img
              key={index}
              className="img-responsive"
              src={item.image}
              alt="image"
            />
          );
        })}
      </div>
      <Topic
        parentTitle="hot-topic-more"
        parentIcon="icon-topic-hot"
        name="Xem thêm Chủ Đề khác"
        icon="fas fa-chevron-right"
      />
    </div>
  );
};

export default HotTopic;
