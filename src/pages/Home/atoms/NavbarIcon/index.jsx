import React from "react";
import classNames from "classnames";
import "./style.scss";

const NavbarIcon = (props) => {
  const { icon, parent } = props;
  return <i className={classNames(icon, parent)}></i>;
};

export default NavbarIcon;
