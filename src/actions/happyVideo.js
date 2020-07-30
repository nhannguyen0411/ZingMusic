import { fetchAPI } from "../utils/request";

export const fetchHappyVideoListRequest = () => {
  return (dispatch) => {
    return fetchAPI()
      .then((res) => res.json())
      .then((json) => {
        dispatch(fetchHappyVideoList(json.nowplaying));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const fetchHappyVideoList = (nowplaying) => {
  return {
    type: "FETCH_HAPPYVIDEOLIST",
    nowplaying,
  };
};
