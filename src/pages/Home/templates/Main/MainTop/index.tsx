import React from "react";
import MainLeft from "./MainLeft";
import MainRight from "./MainRight";

import "./style.scss";

const MainTop = (): JSX.Element => (
  <div className="main-top-wrapper">
    <MainLeft />
    <MainRight />
  </div>
);

export default MainTop;
