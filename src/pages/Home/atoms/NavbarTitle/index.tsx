import React, { FC } from "react";
import classNames from "classnames";
import { Tooltip } from "antd";
import "./style.scss";

interface PropTypes {
  name: string;
  varClass: string;
}

const NavbarTitle: FC<PropTypes> = (props) => {
  const { name, varClass } = props;
  return (
    <Tooltip
      overlayInnerStyle={{ color: "black" }}
      color="white"
      placement={"rightBottom"}
      title={name}
    >
      <span className={classNames("navbar-title-wrapper", varClass)}>
        {name}
      </span>
    </Tooltip>
  );
};

export default NavbarTitle;
