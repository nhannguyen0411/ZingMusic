import React from "react";

import "./style.scss";

function ImageCarousel(props) {
  const arr = [
    { url: "https://via.placeholder.com/122x50", render: true },
    { url: "https://via.placeholder.com/122x50", render: false },
    { url: "https://via.placeholder.com/122x50", render: false },
    { url: "https://via.placeholder.com/122x50", render: false },
    { url: "https://via.placeholder.com/122x50", render: true },
  ];
  return (
    <div className="image-carousel-wrapper">
      <div class="carousel">
        <img src="https://via.placeholder.com/650x274" alt="image" />
      </div>
      <div class="image-render">
        {arr.map((item, index) => {
          return <img key={index} src={item.url} alt="image" />;
        })}
      </div>
    </div>
  );
}

export default ImageCarousel;
