import React from "react";
// components
import NavbarMore from "../../molecules/NavbarMore";
import NavbarSearch from "../../molecules/NavbarSearch";
import NavbarTitle from "../../atoms/NavbarTitle";
// mocks
import navbarTop from "../../../../mocks/NavbarTop";
// others
import "./style.scss";

const NavbarTop = (): JSX.Element => (
  <div className="navbar-top-wrapper">
    <div className="navbar-top-image">
      <img
        src="https://static-zmp3.zadn.vn/skins/zmp3-v5.1/images/logo.png"
        alt="images"
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

export default NavbarTop;
