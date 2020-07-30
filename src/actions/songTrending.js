import { fetchAPI } from "../utils/request";

export const fetchSongTrendingListRequest = () => {
  return (dispatch) => {
    return fetchAPI()
      .then((res) => res.json())
      .then((json) => {
        dispatch(fetchSongTrendingList(json.nowplaying));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const fetchSongTrendingList = (nowplaying) => {
  return {
    type: "FETCH_SONGTRENDINGLIST",
    nowplaying,
  };
};
