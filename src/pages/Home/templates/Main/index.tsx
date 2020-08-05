import React from "react";
// components
import MainTop from "./MainTop";
import MainBottom from "./MainBottom";
// others
import "./style.scss";

const Main = (): JSX.Element => (
  <div className="main-wrapper">
    <MainTop />
    <MainBottom />
  </div>
);

export default Main;
