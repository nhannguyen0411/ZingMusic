import React from "react";
import "./style.scss";

const NavbarIcon = (props) => {
  const { icon } = props;
  return <i className={icon}></i>;
};

export default NavbarIcon;
