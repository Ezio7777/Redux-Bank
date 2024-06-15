import { createStore, combineReducers } from "redux";
import accReducer from "../reducer/accReducer";
import cusReducer from "../reducer/cusReducer";

const rootReducer = combineReducers({
  account: accReducer,
  customer: cusReducer,
});

const store = createStore(rootReducer);

export default store;
