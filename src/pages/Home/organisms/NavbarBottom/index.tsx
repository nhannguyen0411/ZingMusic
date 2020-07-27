import React from "react";
import NavbarMore from "../../molecules/NavbarMore";
import NavbarCloseAds from "../../molecules/NavbarCloseAds";
import navbarBotttom from "../../../../mocks/NavbarBottom";
import { HomeFilled } from "@ant-design/icons";

import { Button } from "antd";
import "./style.scss";

const NavbarBottom = () => {
  return (
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
};

export default NavbarBottom;
