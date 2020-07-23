import React from "react";
import NavbarMore from "../../molecules/NavbarMore";
import NavbarIcon from "../../atoms/NavbarIcon";
import NavbarCloseAds from "../../molecules/NavbarCloseAds";
import navbarBotttom from "../../../../mocks/NavbarBottom";
import "./style.scss";

const NavbarBottom = () => {
  return (
    <div className="navbar-bottom-wrapper">
      <span className="navbar-bottom-icon">
        <NavbarIcon icon="fas fa-home" />
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
