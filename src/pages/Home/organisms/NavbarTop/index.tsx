import React from "react";
import NavbarMore from "../../molecules/NavbarMore";
import NavbarSearch from "../../molecules/NavbarSearch";
import NavbarTitle from "../../atoms/NavbarTitle";
import navbarTop from "../../../../mocks/NavbarTop";

import "./style.scss";

const NavbarTop = () => {
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
        arr={navbarTop}
      />
      <NavbarTitle varClass="navbar-top-title-wrapper" name="Đăng Nhập" />
    </div>
  );
};

export default NavbarTop;
