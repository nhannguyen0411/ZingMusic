// libs
import classNames from "classnames";
import React from "react";
// components
import NavbarTitle from "../../atoms/NavbarTitle";
// others
import "./style.scss";

type info = {
  id: number;
  name: string;
};

interface PropTypes {
  arr: Array<info>;
  parent: string;
  child: string;
}

const NavbarMore = (props: PropTypes) => {
  const { arr, parent, child } = props;
  return (
    <div className={classNames("navbar-more-wrapper", parent)}>
      {arr.map((item: info, index) => (
        <NavbarTitle key={index} varClass={child} name={item.name} />
      ))}
    </div>
  );
};

export default NavbarMore;
