import React from "react";
import MainLeft from "./MainLeft";
import MainRight from "./MainRight";

import "./style.scss";

const Main = () => {
  return (
    <div className="main-wrapper">
      <MainLeft />
      <MainRight />
    </div>
  );
};

export default Main;
