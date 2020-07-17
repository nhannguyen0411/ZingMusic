import React from "react";
import "./index.scss";

const NavbarInput = (props) => {
  return (
    <input
      className="navbar-input"
      type="text"
      autoCapitalize={false}
      placeholder="Search here"
    />
  );
};

export default NavbarInput;
