import { fetchAPI } from "../utils/request";

export const fetchTopChartListRequest = () => {
  return (dispatch) => {
    return fetchAPI()
      .then((res) => res.json())
      .then((json) => {
        dispatch(fetchTopChartList(json.nowplaying));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const fetchTopChartList = (nowplaying) => {
  return {
    type: "FETCH_TOPCHARTLIST",
    nowplaying,
  };
};
