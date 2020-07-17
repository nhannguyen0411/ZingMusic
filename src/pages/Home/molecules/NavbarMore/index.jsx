import React from "react";
import NavbarTitle from "../../atoms/NavbarTitle";
import "./style.scss";

function NavbarMore(props) {
  const { arr, parent, child } = props;
  return (
    <div className={parent}>
      {arr.map((item, index) => {
        return <NavbarTitle key={index} parent={child} name={item.name} />;
      })}
    </div>
  );
}

export default NavbarMore;
