import { fetchAPI } from "../utils/request";

export const fetchTopChartListRequest = () => {
  return (dispatch) => {
    dispatch(fetchTopChartListOnPost());
    return fetchAPI()
      .then((res) => res.json())
      .then((json) => {
        dispatch(fetchTopChartListOnSuccess(json.nowplaying));
      })
      .catch((err) => {
        fetchTopChartListOnFailure(err);
      });
  };
};

export const fetchTopChartListOnSuccess = (nowplaying) => {
  return {
    type: "FETCH_TOPCHARTLIST_ONSUCCESS",
    nowplaying,
  };
};

export const fetchTopChartListOnFailure = (err) => {
  return {
    type: "FETCH_TOPCHARTLIST_ONFAILURE",
    err,
  };
};

export const fetchTopChartListOnPost = () => {
  return {
    type: "FETCH_TOPCHARTLIST_ONPOST",
  };
};
