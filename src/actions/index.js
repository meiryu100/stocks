/**
 * Actions consts
 */
export const SEARCH_FILLTER_STOCKS = "SEARCH_FILLTER_STOCKS";
export const TOGGLE_STAR_STOCK = "TOGGLE_STAR_STOCK";
export const SET_STOCKS_FILTER = "SET_STOCKS_FILTER";
export const UPDATE_USER_DETAILS = "UPDATE_USER_DETAILS";
export const BUY_STOCK = "BUY_STOCK";
export const SELL_STOCK = "SELL_STOCK";
export const CAN_BUY_STOCKS_BUTTON = "CAN_BUY_STOCKS_BUTTON";
export const FOLLOWING_STOCKS_BUTTON = "FOLLOWING_STOCKS_BUTTON";

export const CAN_BUY = "CAN_BUY";
export const STARRED_STOCK = "STARRED_STOCK";

export const searchFiltterStocks = searchStocks => ({
  type: SEARCH_FILLTER_STOCKS,
  searchStocks
});

export const toggleStarStock = symbolStockId => ({
  type: TOGGLE_STAR_STOCK,
  symbolStockId
});

export const setStocksFilter = filter => ({
  type: SET_STOCKS_FILTER,
  filter
});

export const updateUserDetails = userDetails => ({
  type: UPDATE_USER_DETAILS,
  userDetails
});

export const buyStockAction = (currentFunds, stock) => ({
  type: BUY_STOCK,
  currentFunds,
  stock
});

export const sellStockAction = (currentFunds, stock) => ({
  type: SELL_STOCK,
  currentFunds,
  stock
});

export const canBuyStocks = (funds) => ({
  type: CAN_BUY_STOCKS_BUTTON,
  funds
});

export const followingStocks = () => ({
  type: FOLLOWING_STOCKS_BUTTON
});

export const FilterTypes = {
  CAN_BUY,
  STARRED_STOCK
};
