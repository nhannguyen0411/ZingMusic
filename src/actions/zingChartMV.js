import { fetchAPI } from "../utils/request";

export const fetchZingChartMVListRequest = () => {
  return (dispatch) => {
    return fetchAPI()
      .then((res) => res.json())
      .then((json) => {
        dispatch(fetchZingChartMVList(json.nowplaying));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const fetchZingChartMVList = (nowplaying) => {
  return {
    type: "FETCH_ZINGCHARTMVLIST",
    nowplaying,
  };
};
