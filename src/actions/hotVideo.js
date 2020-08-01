import { fetchAPI } from "../utils/request";
import { Music, Get } from "../constant";

export const fetchHotVideoListRequest = () => {
  return (dispatch) => {
    dispatch(fetchHotVideoListOnPost());
    return fetchAPI(Music, Get)
      .then((res) => res.json())
      .then((json) => {
        dispatch(fetchHotVideoListOnSuccess(json.nowplaying));
      })
      .catch((err) => {
        fetchHotVideoListOnFailure(err);
      });
  };
};

export const fetchHotVideoListOnSuccess = (nowplaying) => {
  return {
    type: "FETCH_HOTVIDEOLIST_ONSUCCESS",
    nowplaying,
  };
};

export const fetchHotVideoListOnFailure = (err) => {
  return {
    type: "FETCH_HOTVIDEOLIST_ONFAILURE",
    err,
  };
};

export const fetchHotVideoListOnPost = () => {
  return {
    type: "FETCH_HOTVIDEOLIST_ONPOST",
  };
};
