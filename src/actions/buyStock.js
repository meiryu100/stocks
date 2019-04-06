import { BASE_URL, END_POINTS } from "../utils/consts";
import { buyStockAction } from "./";
import { apiHelper } from "../utils/apiHelper";

export const buyStock = (symbolStockId, stock) => async (
  dispatch
) => {
  const url = `${BASE_URL}${END_POINTS.MARKET.BUY}/`;

  if (symbolStockId) {
    apiHelper("POST", url, buyStockAction, dispatch, {
        stockSymbol : symbolStockId,
        stockQuantity : 1
      }, stock);     
  }
};
