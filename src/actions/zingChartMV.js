import { fetchAPI } from "../utils/request";

export const fetchZingChartMVListRequest = () => {
  return (dispatch) => {
    dispatch(fetchZingChartMVListPost());
    return fetchAPI()
      .then((res) => res.json())
      .then((json) => {
        dispatch(fetchZingChartMVListOnSuccess(json.nowplaying));
      })
      .catch((err) => {
        dispatch(fetchZingChartMVListOnFailure(err));
      });
  };
};

export const fetchZingChartMVListOnSuccess = (nowplaying) => {
  return {
    type: "FETCH_ZINGCHARTMVLIST_ONSUCCESS",
    nowplaying,
  };
};

export const fetchZingChartMVListOnFailure = (err) => {
  return {
    type: "FETCH_ZINGCHARTMVLIST_ONFAILURE",
    err,
  };
};

export const fetchZingChartMVListPost = () => {
  return {
    type: "FETCH_ZINGCHARTMVLIST_ONPOST",
  };
};
