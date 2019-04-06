import { BASE_URL, END_POINTS } from "../utils/consts";
import { updateUserDetails } from "./";
import { apiHelper } from "../utils/apiHelper";

export const fetchUserDetails = () => async (dispatch, getState) => {
  const state = getState();
  const url = `${BASE_URL}${END_POINTS.PORTFOLIO}/`;
  const userName = state.userDetails.username;
  if (userName) {
    return;
  }
  
  // method, url, actionCreator, dispatch, postData
  apiHelper("GET", url, updateUserDetails, dispatch, {});
};
