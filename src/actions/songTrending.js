import { fetchAPI } from "../utils/request";

export const fetchSongTrendingListRequest = () => {
  return (dispatch) => {
    dispatch(fetchSongTrendingListOnPost());
    return fetchAPI()
      .then((res) => res.json())
      .then((json) => {
        dispatch(fetchSongTrendingListOnSuccess(json.nowplaying));
      })
      .catch((err) => {
        fetchSongTrendingListOnFailure(err);
      });
  };
};

export const fetchSongTrendingListOnSuccess = (nowplaying) => {
  return {
    type: "FETCH_SONGTRENDINGLIST_ONSUCCESS",
    nowplaying,
  };
};

export const fetchSongTrendingListOnFailure = (err) => {
  return {
    type: "FETCH_SONGTRENDINGLIST_ONFAILURE",
    err,
  };
};

export const fetchSongTrendingListOnPost = () => {
  return {
    type: "FETCH_SONGTRENDINGLIST_ONPOST",
  };
};
