import React from "react";
import "./style.scss";

const NavbarTitle = (props) => {
  const { name, parent } = props;
  return <span className={parent}>{name}</span>;
};

export default NavbarTitle;
