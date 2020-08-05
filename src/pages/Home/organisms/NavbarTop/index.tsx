// libs
import React from "react";
import { Link } from "react-router-dom";
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
    <div className="options-wrapper">
      <Link to="/Login">
        <NavbarTitle varClass="navbar-top-title-wrapper" name="Đăng Nhập" />
      </Link>
      <span className="separate"> / </span>
      <Link to="/Register">
        <NavbarTitle varClass="navbar-top-title-wrapper" name="Đăng Ký" />
      </Link>
    </div>
  </div>
);

export default NavbarTop;
