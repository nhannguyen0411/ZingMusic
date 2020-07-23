import React from "react";
import NavbarIcon from "../../atoms/NavbarIcon";
import NavbarTitle from "../../atoms/NavbarTitle";

import "./style.scss";

const NavbarCloseAds = () => {
  return (
    <div className="navbar-close-ads-wrapper">
      <NavbarIcon icon="fas fa-power-off" />
      <NavbarTitle varClass="" name="Tắt Quảng Cáo" />
      <NavbarIcon icon="fas fa-cloud-upload-alt" />
    </div>
  );
};

export default NavbarCloseAds;
