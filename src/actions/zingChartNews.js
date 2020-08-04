import { fetchAPI } from "../utils/request";
import { Music, Get } from "../constant";

export const fetchZingChartNewsListOnSuccess = (nowplaying) => ({
  type: "FETCH_ZINGCHARTNEWSLIST_ONSUCCESS",
  nowplaying,
});

export const fetchZingChartNewsListOnFailure = (err) => ({
  type: "FETCH_ZINGCHARTNEWSLIST_ONFAILURE",
  err,
});

export const fetchZingChartNewsListPost = () => ({
  type: "FETCH_ZINGCHARTNEWSLIST_ONPOST",
});

export const fetchZingChartNewsListRequest = () => (dispatch) => {
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
