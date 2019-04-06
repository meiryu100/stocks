import { BASE_URL, END_POINTS } from "../utils/consts";
import { sellStockAction } from "./";
import { apiHelper } from "../utils/apiHelper";

export const sellStock = (symbolStockId, stock) => async (
  dispatch
) => {
  const url = `${BASE_URL}${END_POINTS.MARKET.SELL}/`;

  if (symbolStockId) {
    apiHelper("POST", url, sellStockAction, dispatch, {
        stockSymbol : symbolStockId,
        stockQuantity : 1
      }, stock);
  }
};
