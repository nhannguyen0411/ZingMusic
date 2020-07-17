import React from "react";
import Main from "./templates/Main";
import Header from "./templates/Header";

import "./style.scss";

const HomePage = (props) => {
  return (
    <div className="home-page-wrapper">
      <Header />
      <div className="container">
        <Main />
      </div>
    </div>
  );
};

export default HomePage;
