import React from "react";
import NavbarInput from "../../atoms/NavbarInput";
import { SearchOutlined } from "@ant-design/icons";

import { Button } from "antd";

import "./style.scss";

const NavbarSearch = () => {
  return (
    <div className="navbar-search-wrapper">
      <NavbarInput />
      <div className="navbar-search-icon">
        <Button type="link" icon={<SearchOutlined />} size="small" />
      </div>
    </div>
  );
};

export default NavbarSearch;
