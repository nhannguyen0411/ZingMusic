import React from "react";
import HeaderTop from "./templates/HeaderTop";
import HeaderBottom from "./templates/HeaderBottom";
import MainLeft from "./templates/MainLeft";
import MainRight from "./templates/MainRight";

import "./style.scss";

function App() {
  return (
    <div className="App">
      <HeaderTop />
      <HeaderBottom />
      <div className="container">
        <MainLeft />
        <MainRight />
      </div>
    </div>
  );
}

export default App;
