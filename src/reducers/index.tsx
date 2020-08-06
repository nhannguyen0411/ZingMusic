import topChartReducer from "./topChart";
import { combineReducers } from "redux";
import happyVideoReducer from "./happyVideo";
import hotVideoReducer from "./hotVideo";
import songTrendingReducer from "./songTrending";
import zingChartSongReducer from "./zingChartSong";
import zingChartMVReducer from "./zingChartMV";
import zingChartAlbumReducer from "./zingChartAlbum";
import zingChartNewsReducer from "./zingChartNews";
import userBehaviorReducer from "./userBehavior";

const rootReducer = combineReducers({
  topChart: topChartReducer,
  happyVideo: happyVideoReducer,
  hotVideo: hotVideoReducer,
  songTrending: songTrendingReducer,
  zingChartSong: zingChartSongReducer,
  zingChartMV: zingChartMVReducer,
  zingChartAlbum: zingChartAlbumReducer,
  zingChartNews: zingChartNewsReducer,
  userBehavior: userBehaviorReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
