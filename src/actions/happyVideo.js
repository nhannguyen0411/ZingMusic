import { fetchAPI } from "../utils/request";
import { Music, Get } from "../constant";

export const fetchHappyVideoListOnSuccess = (nowplaying) => ({
  type: "FETCH_HAPPYVIDEOLIST_ONSUCCESS",
  nowplaying,
});

export const fetchHappyVideoListOnFailure = (err) => ({
  type: "FETCH_HAPPYVIDEOLIST_ONFAILURE",
  err,
});

export const fetchHappyVideoListOnPost = () => ({
  type: "FETCH_HAPPYVIDEOLIST_ONPOST",
});

export const fetchHappyVideoListRequest = () => (dispatch) => {
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
