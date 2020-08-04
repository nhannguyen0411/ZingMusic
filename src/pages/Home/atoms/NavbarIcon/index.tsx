import React, { FC } from "react";
import classNames from "classnames";
import "./style.scss";

interface PropTypes {
  icon: string;
  parent: string;
}

const NavbarIcon: FC<PropTypes> = (props) => {
  const { icon, parent } = props;
  return <i className={classNames(icon, parent)}></i>;
};

export default NavbarIcon;
