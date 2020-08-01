import { fetchAPI } from "../utils/request";
import { Country, Get } from "../constant";

export const fetchZingChartSongListRequest = (country) => {
  return (dispatch) => {
    dispatch(fetchZingChartSongListOnPost());
    return fetchAPI(Country, Get)
      .then((res) => res.json())
      .then((json) => {
        if (json.success) {
          const filterCountry = json.countries.find(
            (item) => item.title === country
          );
          console.log("json", filterCountry);
          dispatch(fetchZingChartSongListOnSuccess(filterCountry.list));
        }
      })
      .catch((err) => {
        fetchZingChartSongListOnFailure(err);
      });
  };
};

export const fetchZingChartSongListOnSuccess = (nowplaying) => {
  return {
    type: "FETCH_ZINGCHARTSONGLIST_ONSUCCESS",
    nowplaying,
  };
};

export const fetchZingChartSongListOnFailure = (err) => {
  return {
    type: "FETCH_ZINGCHARTSONGLIST_ONFAILURE",
    err,
  };
};

export const fetchZingChartSongListOnPost = () => {
  return {
    type: "FETCH_ZINGCHARTSONGLIST_ONPOST",
  };
};
