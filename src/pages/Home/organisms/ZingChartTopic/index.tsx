// libs
import React from "react";
// components
import NavbarTitle from "../../atoms/NavbarTitle";
import NavbarIcon from "../../atoms/NavbarIcon";
// others
import "./style.scss";

interface PropTypes {
  name: string;
}

const ZingChartTopic = (props: PropTypes) => {
  const { name } = props;
  return (
    <div className="zing-chart-topic-wrapper">
      <NavbarTitle varClass="zing-chart-word" name={name} />
      <NavbarIcon
        parent="zing-chart-icon-forward"
        icon="fas fa-chevron-right"
      />
    </div>
  );
};

ZingChartTopic.defaultProps = {
  name: "",
};

export default ZingChartTopic;
