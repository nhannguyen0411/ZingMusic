import React from "react";
import "./style.scss";

const NavbarIcon = (props) => {
  const { icon, parent } = props;
  return <i className={`${icon} ${parent}`}></i>;
};

export default NavbarIcon;
