import { Spin } from "antd";

import React from "react";
import "./style.scss";

const Loading = () => {
  return (
    <div className="loading-wrapper">
      <Spin tip="Loading..." />
    </div>
  );
};

export default Loading;
