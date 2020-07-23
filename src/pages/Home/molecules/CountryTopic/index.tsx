import React from "react";
import NavbarTitle from "../../atoms/NavbarTitle";
import countryTopic from "../../../../mocks/CountryTopic";

import "./style.scss";

const CountryTopic = () => {
  return (
    <div className="country-topic-wrapper">
      {countryTopic.map((item, index) => {
        return (
          <div key={index} className={`content`}>
            <NavbarTitle varClass="country-topic" name={item.name} />
          </div>
        );
      })}
    </div>
  );
};

export default CountryTopic;
