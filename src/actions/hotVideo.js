import { fetchAPI } from "../utils/request";
import { Music, Get } from "../constant";

export const fetchHotVideoListOnSuccess = (nowplaying) => ({
  type: "FETCH_HOTVIDEOLIST_ONSUCCESS",
  nowplaying,
});

export const fetchHotVideoListOnFailure = (err) => ({
  type: "FETCH_HOTVIDEOLIST_ONFAILURE",
  err,
});

export const fetchHotVideoListOnPost = () => ({
  type: "FETCH_HOTVIDEOLIST_ONPOST",
});

export const fetchHotVideoListRequest = () => (dispatch) => {
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
