import { fetchAPI } from "../utils/request";

export const fetchZingChartVideoListRequest = () => {
  return (dispatch) => {
    return fetchAPI()
      .then((res) => res.json())
      .then((json) => {
        dispatch(fetchZingChartVideoList(json.nowplaying));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const fetchZingChartVideoList = (nowplaying) => {
  return {
    type: "FETCH_ZINGCHARTVIDEOLIST",
    nowplaying,
  };
};
