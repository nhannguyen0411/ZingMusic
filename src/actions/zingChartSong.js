import { fetchAPI } from "../utils/request";

export const fetchZingChartSongListRequest = () => {
  return (dispatch) => {
    dispatch(fetchZingChartSongListOnPost());
    return fetchAPI()
      .then((res) => res.json())
      .then((json) => {
        dispatch(fetchZingChartSongListOnSuccess(json.nowplaying));
      })
      .catch((err) => {
        fetchZingChartSongListOnFailure(err);
      });
  };
};

export const fetchZingChartSongListOnSuccess = (nowplaying) => {
  return {
    type: "FETCH_ZINGCHARTSONGLIST_ONSUCCESS",
    nowplaying,
  };
};

export const fetchZingChartSongListOnFailure = (err) => {
  return {
    type: "FETCH_ZINGCHARTSONGLIST_ONFAILURE",
    err,
  };
};

export const fetchZingChartSongListOnPost = () => {
  return {
    type: "FETCH_ZINGCHARTSONGLIST_ONPOST",
  };
};
