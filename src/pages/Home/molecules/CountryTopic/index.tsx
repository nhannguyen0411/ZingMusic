import React, { FC } from "react";
import NavbarTitle from "../../atoms/NavbarTitle";
import countryTopic from "../../../../mocks/CountryTopic";

import "./style.scss";
import { Tabs } from "antd";
const { TabPane } = Tabs;

interface PropTypes {
  onHandleChangeCountry: Function;
}

const CountryTopic: FC<PropTypes> = (props) => {
  const { children, onHandleChangeCountry } = props;
  return (
    <div className="country-topic-wrapper">
      <Tabs
        size="large"
        centered={true}
        onChange={(key) => onHandleChangeCountry(key)}
        type="card"
      >
        {countryTopic.map((item, index) => {
          return (
            <TabPane tab={item.name} key={`${item.title}`}>
              {children}
            </TabPane>
          );
        })}
      </Tabs>
    </div>
  );
};

export default CountryTopic;
