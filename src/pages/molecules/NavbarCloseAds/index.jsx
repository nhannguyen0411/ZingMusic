import React from "react";
import NavbarIcon from "../../atoms/NavbarIcon";
import NavbarTitle from "../../atoms/NavbarTitle";

import "./style.scss";

const NavbarCloseAds = (props) => {
  return (
    <div className="navbar-close-ads">
      <NavbarIcon icon="fas fa-power-off" />
      <NavbarTitle name="Tắt Quảng Cáo" />
      <NavbarIcon icon="fas fa-cloud-upload-alt" />
    </div>
  );
};

export default NavbarCloseAds;
