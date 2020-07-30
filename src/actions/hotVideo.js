import { fetchAPI } from "../utils/request";

export const fetchHotVideoListRequest = () => {
  return (dispatch) => {
    return fetchAPI()
      .then((res) => res.json())
      .then((json) => {
        dispatch(fetchHotVideoList(json.nowplaying));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const fetchHotVideoList = (nowplaying) => {
  return {
    type: "FETCH_HOTVIDEOLIST",
    nowplaying,
  };
};
