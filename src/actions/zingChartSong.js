import { fetchAPI } from "../utils/request";

export const fetchZingChartSongListRequest = () => {
  return (dispatch) => {
    return fetchAPI()
      .then((res) => res.json())
      .then((json) => {
        dispatch(fetchZingChartSongList(json.nowplaying));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const fetchZingChartSongList = (nowplaying) => {
  return {
    type: "FETCH_ZINGCHARTSONGLIST",
    nowplaying,
  };
};
