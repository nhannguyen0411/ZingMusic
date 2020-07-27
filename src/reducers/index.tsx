import topChartReducer from "./topChart";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  topChart: topChartReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
