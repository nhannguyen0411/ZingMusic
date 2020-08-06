// libs
import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "antd";
// components
import NavbarMore from "../../molecules/NavbarMore";
import NavbarSearch from "../../molecules/NavbarSearch";
import NavbarTitle from "../../atoms/NavbarTitle";
// actions
import { fetchLogoutRequest } from "actions/userBehavior";
// reducers
import { AppState } from "reducers";
// mocks
import navbarTop from "../../../../mocks/NavbarTop";
// others
import "./style.scss";

const NavbarTop = () => {
  const { token } = useSelector((state: AppState) => state.userBehavior);
  const dispatch = useDispatch();
  const handleOnLogOut = () => {
    dispatch(fetchLogoutRequest());
  };
  return (
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
      {token ? (
        <div className="options-wrapper">
          <span>Hello there</span>
          <span className="separate">/</span>
          <Button type="link" onClick={handleOnLogOut}>
            Đăng Xuất
          </Button>
        </div>
      ) : (
        <div className="options-wrapper">
          <Link to="/Login">
            <NavbarTitle varClass="navbar-top-title-wrapper" name="Đăng Nhập" />
          </Link>
          <span className="separate"> / </span>
          <Link to="/Register">
            <NavbarTitle varClass="navbar-top-title-wrapper" name="Đăng Ký" />
          </Link>
        </div>
      )}
    </div>
  );
};

export default NavbarTop;
