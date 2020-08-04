import React, { FC } from "react";
import classNames from "classnames";
import NavbarTitle from "../../atoms/NavbarTitle";
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

const NavbarMore: FC<PropTypes> = (props) => {
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
