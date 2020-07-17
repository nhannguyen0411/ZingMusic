import React from "react";
import MainCarousel from "../../organisms/MainCarousel";

import "./styles.scss";

const MainLeft = (props) => {
  return (
    <div className="main-left">
      <MainCarousel />
      <div className="zing-chart">
        <img src="https://via.placeholder.com/650x280" alt="image" />
      </div>
    </div>
  );
};

export default MainLeft;
