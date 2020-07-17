import React from "react";
import NavbarInput from "../../atoms/NavbarInput";
import NavbarIcon from "../../atoms/NavbarIcon";
import "./style.scss";

const NavbarSearch = (props) => {
  return (
    <div className="navbar-search-wrapper">
      <NavbarInput />
      <div className="navbar-search-icon">
        <NavbarIcon icon="fas fa-search" />
      </div>
    </div>
  );
};

export default NavbarSearch;
