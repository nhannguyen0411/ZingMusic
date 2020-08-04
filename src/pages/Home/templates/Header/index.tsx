import React from "react";
import HeaderTop from "./HeaderTop";
import HeaderBottom from "./HeaderBottom";

import "./style.scss";

const Header = (): JSX.Element => (
  <div className="header-wrapper">
    <HeaderTop />
    <HeaderBottom />
  </div>
);

export default Header;
