import React from "react";
// components
import Partner from "../../../organisms/Partner";
// mocks
import partner from "../../../../../mocks/Partner";
// others
import "./style.scss";

const MainBottom = (): JSX.Element => (
  <div className="main-bottom-wrapper">
    <Partner arr={partner} />
  </div>
);

export default MainBottom;
