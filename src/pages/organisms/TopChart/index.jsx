import React from "react";
import NavbarTitle from "../../atoms/NavbarTitle";
import NavbarIcon from "../../atoms/NavbarIcon";
const TopChart = (props) => {
  return (
    <div className="top-chart">
      <NavbarTitle name="1" />
      <NavbarIcon icon="fas fa-minus" />
    </div>
  );
};

export default TopChart;
