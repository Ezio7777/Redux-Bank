import { createStore, combineReducers } from "redux";
import accReducer from "./reducers/accReducer";
import cusReducer from "./reducers/cusReducer";

const rootReducer = combineReducers({
  account: accReducer,
  customer: cusReducer,
});

const store = createStore(rootReducer);

export default store;
