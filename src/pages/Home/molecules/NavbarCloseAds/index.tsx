import React from "react";
import NavbarTitle from "../../atoms/NavbarTitle";
import { PoweroffOutlined, CloudUploadOutlined } from "@ant-design/icons";

import { Button } from "antd";

import "./style.scss";

const NavbarCloseAds = () => {
  return (
    <div className="navbar-close-ads-wrapper">
      <Button type="link" icon={<PoweroffOutlined />} size="large" />
      <NavbarTitle varClass="" name="Tắt Quảng Cáo" />
      <Button type="link" icon={<CloudUploadOutlined />} size="large" />
    </div>
  );
};

export default NavbarCloseAds;
