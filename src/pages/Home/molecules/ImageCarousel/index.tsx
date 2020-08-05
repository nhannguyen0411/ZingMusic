// libs
import { Carousel } from "antd";
import React from "react";
// others
import "./style.scss";

const ImageCarousel = (): JSX.Element => {
  const arr = [
    {
      url:
        "https://photo-zmp3.zadn.vn/banner/b/1/8/b/b18bbca0e564c95ab89fa5a161f85ecd.jpg",
    },
    {
      url:
        "https://photo-zmp3.zadn.vn/banner/5/e/a/a/5eaa5572be5e0661690b07a9d5429565.jpg",
    },
    {
      url:
        "https://photo-zmp3.zadn.vn/banner/7/3/3/b/733b76180d461b24497febed16a9e84f.jpg",
    },
    {
      url:
        "https://photo-zmp3.zadn.vn/banner/e/7/5/b/e75b40fd86156710c338598e0640dd75.jpg",
    },
    {
      url:
        "https://photo-zmp3.zadn.vn/banner/4/5/3/a/453a268909178f49f74e4c49599f04db.jpg",
    },
  ];
  return (
    <div className="image-carousel-wrapper">
      <div className="carousel">
        <Carousel autoplay>
          {arr.map((item, index) => (
            <div key={index}>
              <img src={item.url} alt="imagess" />
            </div>
          ))}
        </Carousel>
      </div>
      <div className="image-render">
        {arr.map((item, index) => (
          <img key={index} src={item.url} alt="imagess" />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
