// libs
import { HomeFilled } from "@ant-design/icons";
import { Button } from "antd";
import React from "react";
// components
import NavbarMore from "../../molecules/NavbarMore";
import NavbarCloseAds from "../../molecules/NavbarCloseAds";
// mocks
import navbarBotttom from "../../../../mocks/NavbarBottom";
// others
import "./style.scss";

const NavbarBottom = (): JSX.Element => (
  <div className="navbar-bottom-wrapper">
    <span className="navbar-bottom-icon">
      <Button type="link" icon={<HomeFilled />} size="large" />
    </span>
    <NavbarMore
      parent="navbar-bottom-more"
      child="navbar-bottom-title-wrapper"
      arr={navbarBotttom}
    />
    <NavbarCloseAds />
  </div>
);

export default NavbarBottom;
