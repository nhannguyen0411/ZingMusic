import React, { FC } from "react";
import NavbarTitle from "../../atoms/NavbarTitle";
import "./style.scss";

interface PropTypes {
  arr: Array<string>;
  parent: String;
  child: String;
}

const NavbarMore: FC<PropTypes> = (props) => {
  const { arr, parent, child } = props;
  return (
    <div className={`${parent}`}>
      {arr.map((item: any, index: any) => {
        return <NavbarTitle key={index} parent={child} name={item.name} />;
      })}
    </div>
  );
};

export default NavbarMore;
