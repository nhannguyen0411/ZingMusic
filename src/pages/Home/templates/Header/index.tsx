import React from "react";
// components
import HeaderTop from "./HeaderTop";
import HeaderBottom from "./HeaderBottom";
// others
import "./style.scss";

const Header = (): JSX.Element => (
  <div className="header-wrapper">
    <HeaderTop />
    <HeaderBottom />
  </div>
);

export default Header;
