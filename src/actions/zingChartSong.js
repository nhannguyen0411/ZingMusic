import { fetchAPI } from "../utils/request";
import { Country, Get } from "../constant";

export const fetchZingChartSongListOnSuccess = (nowplaying, country) => ({
  type: "FETCH_ZINGCHARTSONGLIST_ONSUCCESS",
  nowplaying,
});

export const fetchZingChartSongListOnFailure = (err) => ({
  type: "FETCH_ZINGCHARTSONGLIST_ONFAILURE",
  err,
});

export const fetchZingChartSongListOnPost = () => ({
  type: "FETCH_ZINGCHARTSONGLIST_ONPOST",
});

export const fetchZingChartSongListRequest = (country) => (dispatch) => {
  dispatch(fetchZingChartSongListOnPost());
  return fetchAPI(Country, Get)
    .then((res) => res.json())
    .then((json) => {
      if (json.success) {
        const filterCountry = json.countries.find(
          (item) => item.country === country
        );
        dispatch(fetchZingChartSongListOnSuccess(filterCountry.list));
      }
    })
    .catch((err) => {
      fetchZingChartSongListOnFailure(err);
    });
};
