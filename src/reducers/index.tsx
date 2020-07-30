import topChartReducer from "./topChart";
import { combineReducers } from "redux";
import happyVideoReducer from "./happyVideo";
import hotVideoReducer from "./hotVideo";
import songTrendingReducer from "./songTrending";
import zingChartSongReducer from "./zingChartSong";

const rootReducer = combineReducers({
  topChart: topChartReducer,
  happyVideo: happyVideoReducer,
  hotVideo: hotVideoReducer,
  songTrending: songTrendingReducer,
  zingChartSong: zingChartSongReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
