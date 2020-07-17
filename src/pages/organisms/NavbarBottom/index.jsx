import React from "react";
import NavbarMore from "../../molecules/NavbarMore";
import NavbarIcon from "../../atoms/NavbarIcon";
import NavbarCloseAds from "../../molecules/NavbarCloseAds";

import "./style.scss";

const NavbarBottom = (props) => {
  const arr = [
    { id: 0, name: "Nhạc cá nhân" },
    { id: 8, name: "|" },
    { id: 1, name: "#ZingChart" },
    { id: 2, name: "Top100" },
    { id: 3, name: "Chủ Đề" },
    { id: 4, name: "Video" },
    { id: 5, name: "Album" },
    { id: 6, name: "Nghệ Sĩ" },
    { id: 7, name: "Vip" },
  ];
  return (
    <div className="navbar-bottom">
      <span className="navbar-bottom-icon">
        <NavbarIcon icon="fas fa-home" />
      </span>
      <NavbarMore
        parent="navbar-bottom-more"
        child="navbar-bottom-title-wrapper"
        arr={arr}
      />
      <NavbarCloseAds />
    </div>
  );
};

export default NavbarBottom;
