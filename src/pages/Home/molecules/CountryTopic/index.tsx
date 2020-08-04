import { Tabs } from "antd";
import React, { FC } from "react";
import countryTopic from "../../../../mocks/CountryTopic";
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
}

const CountryTopic: FC<PropTypes> = (props) => {
  const {
    children,
    onHandleChangeCountrySong,
    onHandleChangeCountryVideo,
    isSong,
    isAlbum,
  } = props;
  return (
    <div className="country-topic-wrapper">
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

export default CountryTopic;
