//libs
import { Tabs } from "antd";
import React from "react";
// components
import ZingChartTopic from "pages/Home/organisms/ZingChartTopic";
//mocks
import countryTopic from "mocks/CountryTopic";
//others
import "./style.scss";

const { TabPane } = Tabs;

interface PropTypes {
  onHandleChangeCountrySong: (country: string) => void;
  onHandleChangeCountryVideo: (
    category: string,
    country: string,
    isAlbum: boolean
  ) => void;
  isSong: boolean;
  isAlbum: boolean;
  name: string;
  children: JSX.Element;
}

const CountryTopic = (props: PropTypes) => {
  const {
    children,
    onHandleChangeCountrySong,
    onHandleChangeCountryVideo,
    isSong,
    isAlbum,
    name,
  } = props;
  return (
    <div className="country-topic-wrapper">
      <ZingChartTopic name={name} />
      <Tabs
        size="large"
        centered={true}
        onChange={(key) =>
          isSong
            ? onHandleChangeCountrySong(key)
            : onHandleChangeCountryVideo(isAlbum ? "album" : "MV", key, isAlbum)
        }
        type="card"
      >
        {countryTopic.map((item) => (
          <TabPane tab={item.name} key={`${item.title}`}>
            {children}
          </TabPane>
        ))}
      </Tabs>
    </div>
  );
};

CountryTopic.defaultProps = {
  onHandleChangeCountrySong: () => {},
  onHandleChangeCountryVideo: () => {},
  isSong: false,
  isAlbum: false,
  name: "",
};

export default CountryTopic;
