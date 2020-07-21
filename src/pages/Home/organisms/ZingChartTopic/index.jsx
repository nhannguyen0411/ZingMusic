import React from "react";
import NavbarTitle from "../../atoms/NavbarTitle";
import NavbarIcon from "../../atoms/NavbarIcon";

import "./style.scss";

const ZingChartTopic = (props) => {
  const { name, news } = props;
  return (
    <div className="zing-chart-topic-wrapper">
      <NavbarTitle parent="zing-chart-word" name={name} />
      <NavbarIcon
        parent="zing-chart-icon-forward"
        icon="fas fa-chevron-right"
      />
      {news && (
        <NavbarIcon parent="zing-chart-icon-play" icon="fas fa-play-circle" />
      )}
    </div>
  );
};

export default ZingChartTopic;
