import React, { FC } from "react";
import classNames from "classnames";
import NavbarTitle from "../../atoms/NavbarTitle";
import "./style.scss";

interface PropTypes {
  arr: Array<object>;
  parent: String;
  child: String;
}

const NavbarMore: FC<PropTypes> = (props) => {
  const { arr, parent, child } = props;
  return (
    <div className={classNames(`navbar-more-wrapper`, parent)}>
      {arr.map((item: any, index: any) => {
        return <NavbarTitle key={index} varClass={child} name={item.name} />;
      })}
    </div>
  );
};

export default NavbarMore;
