import React from "react";

import "./style.scss";

const ImageCarousel = () => {
  const arr = [
    { url: "https://via.placeholder.com/122x50", render: true },
    { url: "https://via.placeholder.com/122x50", render: false },
    { url: "https://via.placeholder.com/122x50", render: false },
    { url: "https://via.placeholder.com/122x50", render: false },
    { url: "https://via.placeholder.com/122x50", render: true },
  ];
  return (
    <div className="image-carousel-wrapper">
      <div className="carousel">
        <img src="https://via.placeholder.com/650x274" alt="image" />
      </div>
      <div className="image-render">
        {arr.map((item, index) => {
          return <img key={index} src={item.url} alt="image" />;
        })}
      </div>
    </div>
  );
};

export default ImageCarousel;
