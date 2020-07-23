import React from "react";
import NavbarMore from "../../molecules/NavbarMore";
import NavbarSearch from "../../molecules/NavbarSearch";
import "./style.scss";
import NavbarTitle from "../../atoms/NavbarTitle";

const NavbarTop = () => {
  const arr = [
    { id: 1, name: "MP3" },
    { id: 2, name: "NEWS" },
    { id: 3, name: "TV" },
    { id: 4, name: "ZALO PC" },
  ];

  return (
    <div className="navbar-top-wrapper">
      <div className="navbar-top-image">
        <img
          src="https://static-zmp3.zadn.vn/skins/zmp3-v5.1/images/logo.png"
          alt="image"
        />
      </div>
      <NavbarSearch />
      <NavbarMore
        parent="navbar-top-more"
        child="navbar-top-title-wrapper"
        arr={arr}
      />
      <NavbarTitle parent="navbar-top-title-wrapper" name="Đăng Nhập" />
    </div>
  );
};

export default NavbarTop;
