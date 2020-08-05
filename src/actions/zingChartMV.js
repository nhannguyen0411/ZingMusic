import { fetchAPI } from "../utils/request";
import { Week, Get } from "../constant";

export const fetchZingChartMVListOnSuccess = (mv) => ({
  type: "FETCH_ZINGCHARTMVLIST_ONSUCCESS",
  mv,
});

export const fetchZingChartMVListOnFailure = (err) => ({
  type: "FETCH_ZINGCHARTMVLIST_ONFAILURE",
  err,
});

export const fetchZingChartMVListPost = () => ({
  type: "FETCH_ZINGCHARTMVLIST_ONPOST",
});

export const fetchZingChartMVListRequest = (category, country) => (
  dispatch
) => {
  dispatch(fetchZingChartMVListPost());
  return fetchAPI(Week, Get)
    .then((res) => res.json())
    .then((json) => {
      if (json.success) {
        const mv = json.weeks
          .find((item) => item.category === category)
          .mv.find((item) => item.country === country);
        dispatch(fetchZingChartMVListOnSuccess(mv.list));
      }
    })
    .catch((err) => {
      dispatch(fetchZingChartMVListOnFailure(err));
    });
};
