import { fetchAPI } from "../utils/request";
import { Music, Get } from "../constant";

export const fetchZingChartAlbumListRequest = () => {
  return (dispatch) => {
    dispatch(fetchZingChartAlbumListPost());
    return fetchAPI(Music, Get)
      .then((res) => res.json())
      .then((json) => {
        dispatch(fetchZingChartAlbumListOnSuccess(json.nowplaying));
      })
      .catch((err) => {
        dispatch(fetchZingChartAlbumListOnFailure(err));
      });
  };
};

export const fetchZingChartAlbumListOnSuccess = (nowplaying) => {
  return {
    type: "FETCH_ZINGCHARTALBUMLIST_ONSUCCESS",
    nowplaying,
  };
};

export const fetchZingChartAlbumListOnFailure = (err) => {
  return {
    type: "FETCH_ZINGCHARTALBUMLIST_ONFAILURE",
    err,
  };
};

export const fetchZingChartAlbumListPost = () => {
  return {
    type: "FETCH_ZINGCHARTALBUMLIST_ONPOST",
  };
};
