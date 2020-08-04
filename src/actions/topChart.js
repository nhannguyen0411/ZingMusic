import { fetchAPI } from "../utils/request";
import { Music, Get } from "../constant";

export const fetchTopChartListOnSuccess = (nowplaying) => ({
  type: "FETCH_TOPCHARTLIST_ONSUCCESS",
  nowplaying,
});

export const fetchTopChartListOnFailure = (err) => ({
  type: "FETCH_TOPCHARTLIST_ONFAILURE",
  err,
});

export const fetchTopChartListOnPost = () => ({
  type: "FETCH_TOPCHARTLIST_ONPOST",
});

export const fetchTopChartListRequest = () => (dispatch) => {
  dispatch(fetchTopChartListOnPost());
  return fetchAPI(Music, Get)
    .then((res) => res.json())
    .then((json) => {
      dispatch(fetchTopChartListOnSuccess(json.nowplaying));
    })
    .catch((err) => {
      fetchTopChartListOnFailure(err);
    });
};
