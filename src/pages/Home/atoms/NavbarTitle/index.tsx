import React, { FC } from "react";
import classNames from "classnames";
import "./style.scss";

interface PropTypes {
  name: String;
  parent: String;
}

const NavbarTitle: FC<PropTypes> = (props) => {
  const { name, parent } = props;
  return (
    <span
      className={classNames(`navbar-title-wrapper`, { [`${parent}`]: true })}
    >
      {name}
    </span>
  );
};

export default NavbarTitle;
