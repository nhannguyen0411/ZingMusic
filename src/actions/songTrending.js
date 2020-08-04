import { fetchAPI } from "../utils/request";
import { Music, Get } from "../constant";

export const fetchSongTrendingListOnSuccess = (nowplaying) => ({
  type: "FETCH_SONGTRENDINGLIST_ONSUCCESS",
  nowplaying,
});

export const fetchSongTrendingListOnFailure = (err) => ({
  type: "FETCH_SONGTRENDINGLIST_ONFAILURE",
  err,
});

export const fetchSongTrendingListOnPost = () => ({
  type: "FETCH_SONGTRENDINGLIST_ONPOST",
});

export const fetchSongTrendingListRequest = () => (dispatch) => {
  dispatch(fetchSongTrendingListOnPost());
  return fetchAPI(Music, Get)
    .then((res) => res.json())
    .then((json) => {
      dispatch(fetchSongTrendingListOnSuccess(json.nowplaying));
    })
    .catch((err) => {
      fetchSongTrendingListOnFailure(err);
    });
};
