import { fetchAPI } from "../utils/request";
import { Music, Get } from "../constant";

export const fetchHappyVideoListRequest = () => {
  return (dispatch) => {
    dispatch(fetchHappyVideoListOnPost());
    return fetchAPI(Music, Get)
      .then((res) => res.json())
      .then((json) => {
        dispatch(fetchHappyVideoListOnSuccess(json.nowplaying));
      })
      .catch((err) => {
        fetchHappyVideoListOnFailure(err);
      });
  };
};

export const fetchHappyVideoListOnSuccess = (nowplaying) => {
  return {
    type: "FETCH_HAPPYVIDEOLIST_ONSUCCESS",
    nowplaying,
  };
};

export const fetchHappyVideoListOnFailure = (err) => {
  return {
    type: "FETCH_HAPPYVIDEOLIST_ONFAILURE",
    err,
  };
};

export const fetchHappyVideoListOnPost = () => {
  return {
    type: "FETCH_HAPPYVIDEOLIST_ONPOST",
  };
};
