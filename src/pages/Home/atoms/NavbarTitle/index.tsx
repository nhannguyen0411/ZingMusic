import React, { FC } from "react";
import classNames from "classnames";
import "./style.scss";

interface PropTypes {
  name: String;
  varClass: String;
}

const NavbarTitle: FC<PropTypes> = (props) => {
  const { name, varClass } = props;
  return (
    <span className={classNames(`navbar-title-wrapper`, varClass)}>{name}</span>
  );
};

export default NavbarTitle;
