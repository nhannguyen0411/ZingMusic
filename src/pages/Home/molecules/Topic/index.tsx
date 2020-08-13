// libs
import React from "react";
// components
import NavbarTitle from "../../atoms/NavbarTitle";
import NavbarIcon from "../../atoms/NavbarIcon";
// others
import "./style.scss";
// types
import { PropTopic } from "../../../../types/Home";

const Topic = (props: PropTopic) => {
  const { name, parentTitle, icon, parentIcon } = props;
  return (
    <div className="topic-wrapper">
      <NavbarTitle varClass={parentTitle} name={name} />
      <NavbarIcon parent={parentIcon} icon={icon} />
    </div>
  );
};

export default Topic;
