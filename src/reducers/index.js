import { combineReducers } from "redux";
import userDetails from "./userDetails";
import searchStocks from "./searchStocks";

export default combineReducers({
  userDetails,
  searchStocks
});
