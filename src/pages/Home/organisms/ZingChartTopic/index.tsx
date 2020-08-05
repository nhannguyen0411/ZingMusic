import React, { FC } from "react";
// components
import NavbarTitle from "../../atoms/NavbarTitle";
import NavbarIcon from "../../atoms/NavbarIcon";
// others
import "./style.scss";

interface PropTypes {
  name: string;
  weekNews: boolean;
}

const ZingChartTopic: FC<PropTypes> = (props) => {
  const { name, weekNews } = props;
  return (
    <div className="zing-chart-topic-wrapper">
      <NavbarTitle varClass="zing-chart-word" name={name} />
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
