import React from "react";
import MainTop from "./MainTop";
import MainBottom from "./MainBottom";

import "./style.scss";

const Main = (): JSX.Element => (
  <div className="main-wrapper">
    <MainTop />
    <MainBottom />
  </div>
);

export default Main;
