import { fetchAPI } from "../utils/request";
import { Week, Get } from "../constant";

export const fetchZingChartAlbumListOnSuccess = (album) => ({
  type: "FETCH_ZINGCHARTALBUMLIST_ONSUCCESS",
  album,
});

export const fetchZingChartAlbumListOnFailure = (err) => ({
  type: "FETCH_ZINGCHARTALBUMLIST_ONFAILURE",
  err,
});

export const fetchZingChartAlbumListPost = () => ({
  type: "FETCH_ZINGCHARTALBUMLIST_ONPOST",
});

export const fetchZingChartAlbumListRequest = (category, country) => (
  dispatch
) => {
  dispatch(fetchZingChartAlbumListPost());
  return fetchAPI(Week, Get)
    .then((res) => res.json())
    .then((json) => {
      if (json.success) {
        const album = json.weeks
          .find((item) => item.category === category)
          .album.find((item) => item.country === country);
        dispatch(fetchZingChartAlbumListOnSuccess(album.list));
      }
    })
    .catch((err) => {
      dispatch(fetchZingChartAlbumListOnFailure(err));
    });
};
