import React from "react";
// components
import Main from "./templates/Main";
import Header from "./templates/Header";
import Footer from "./templates/Footer";
// others
import "./style.scss";

const HomePage = (): JSX.Element => (
  <div className="home-page-wrapper">
    <Header />
    <div className="container">
      <Main />
    </div>
    <Footer />
  </div>
);

export default HomePage;
