import React from "react";
import NavbarTitle from "../../atoms/NavbarTitle";
import NavbarIcon from "../../atoms/NavbarIcon";

import "./style.scss";

const Topic = (props) => {
  const { name, parentTitle, icon, parentIcon } = props;
  return (
    <div className="topic-wrapper">
      <NavbarTitle parent={parentTitle} name={name} />
      <NavbarIcon parent={parentIcon} icon={icon} />
    </div>
  );
};

export default Topic;
