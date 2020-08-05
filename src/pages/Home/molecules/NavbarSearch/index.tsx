// libs
import { SearchOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React from "react";
// components
import NavbarInput from "../../atoms/NavbarInput";
// others
import "./style.scss";

const NavbarSearch = (): JSX.Element => (
  <div className="navbar-search-wrapper">
    <NavbarInput />
    <div className="navbar-search-icon">
      <Button type="link" icon={<SearchOutlined />} size="small" />
    </div>
  </div>
);

export default NavbarSearch;
