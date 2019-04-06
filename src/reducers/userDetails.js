import { UPDATE_USER_DETAILS, BUY_STOCK, SELL_STOCK } from "../actions";

const initUserDetails = () => {
  return {
    username: "",
    funds: 0,
    myStocks: []
  };
};

const userDetails = (state = initUserDetails(), action) => {
  const newState = {...state};
  switch (action.type) {
    case UPDATE_USER_DETAILS:
      return action.userDetails;
    case BUY_STOCK:
      const newStock = action.stock;
      const newPurchaseStock = {
        symbol: newStock.symbol,
        purchasePrice : newStock.currentPrice,
        quantity: 1
      };
      newState.myStocks = [...newState.myStocks, newPurchaseStock];
      newState.funds = action.currentFunds.funds;
      return newState;
    case SELL_STOCK:
      newState.myStocks = newState.myStocks.filter(stock => stock.symbol !== action.stock.symbol);
      newState.funds = action.currentFunds.funds;
      return newState;
    default:
      return state;
  }
};

export default userDetails;
