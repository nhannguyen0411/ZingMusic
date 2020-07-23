import React from "react";
import NavbarTitle from "../../atoms/NavbarTitle";

import "./style.scss";

const CountryTopic = () => {
  const arr = [
    { id: 1, name: "Việt Nam", active: true },
    { id: 2, name: "US-UK", active: false },
    { id: 3, name: "K-Pop", active: false },
  ];

  return (
    <div className="country-topic-wrapper">
      {arr.map((item, index) => {
        return (
          <div key={index} className={`content`}>
            <NavbarTitle parent="country-topic" name={item.name} />
          </div>
        );
      })}
    </div>
  );
};

export default CountryTopic;
