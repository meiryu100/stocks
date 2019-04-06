import { BASE_URL, END_POINTS } from "../utils/consts";
import { searchFiltterStocks } from "./";
import { apiHelper } from "../utils/apiHelper";

export const fetchSearchStocks = searchStockQuery => async (
  dispatch
) => {
  const url = `${BASE_URL}${END_POINTS.MARKET.SEARCH}/`;

  if (searchStockQuery) {
    apiHelper("POST", url, searchFiltterStocks, dispatch, {
      searchString: searchStockQuery
    });
  } else {
    dispatch(searchFiltterStocks({ stocks : [] }));
  }
};