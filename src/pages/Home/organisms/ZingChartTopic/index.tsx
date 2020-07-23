import React, { FC } from "react";
import NavbarTitle from "../../atoms/NavbarTitle";
import NavbarIcon from "../../atoms/NavbarIcon";

import "./style.scss";

interface PropTypes {
  name: string;
  weekNews: boolean;
}

const ZingChartTopic: FC<PropTypes> = (props) => {
  const { name, weekNews } = props;
  return (
    <div className="zing-chart-topic-wrapper">
      <NavbarTitle parent="zing-chart-word" name={name} />
      <NavbarIcon
        parent="zing-chart-icon-forward"
        icon="fas fa-chevron-right"
      />
      {!weekNews && (
        <NavbarIcon parent="zing-chart-icon-play" icon="fas fa-play-circle" />
      )}
    </div>
  );
};

export default ZingChartTopic;
