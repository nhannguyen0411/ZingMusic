import topChartReducer from "./topChart";
import { combineReducers } from "redux";
import happyVideoReducer from "./happyVideo";

const rootReducer = combineReducers({
  topChart: topChartReducer,
  happyVideo: happyVideoReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
