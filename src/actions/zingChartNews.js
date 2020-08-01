import { fetchAPI } from "../utils/request";
import { Music, Get } from "../constant";

export const fetchZingChartNewsListRequest = () => {
  return (dispatch) => {
    dispatch(fetchZingChartNewsListPost());
    return fetchAPI(Music, Get)
      .then((res) => res.json())
      .then((json) => {
        dispatch(fetchZingChartNewsListOnSuccess(json.nowplaying));
      })
      .catch((err) => {
        dispatch(fetchZingChartNewsListOnFailure(err));
      });
  };
};

export const fetchZingChartNewsListOnSuccess = (nowplaying) => {
  return {
    type: "FETCH_ZINGCHARTNEWSLIST_ONSUCCESS",
    nowplaying,
  };
};

export const fetchZingChartNewsListOnFailure = (err) => {
  return {
    type: "FETCH_ZINGCHARTNEWSLIST_ONFAILURE",
    err,
  };
};

export const fetchZingChartNewsListPost = () => {
  return {
    type: "FETCH_ZINGCHARTNEWSLIST_ONPOST",
  };
};
