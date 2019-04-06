import { SEARCH_FILLTER_STOCKS, TOGGLE_STAR_STOCK, CAN_BUY_STOCKS_BUTTON, FOLLOWING_STOCKS_BUTTON } from "../actions";
import dateformat from 'dateformat';

const searchStocks = (state = [], action) => {
  const currentStocks = [...state];  
  switch (action.type) {
    case SEARCH_FILLTER_STOCKS:      
      const starredStocks = currentStocks.filter(stock => !!stock.starred);
      const stocksGettedBySearch = action.searchStocks.stocks;
      stocksGettedBySearch.map(stock => {
        let stockDate = new Date(stock.startOfCommerce);
        stock.startOfCommerce = dateformat(stockDate, 'mmmm d yyyy');
        stock.starred = false;      
        return stock;
      });
      const concatStocks = [...starredStocks, ...stocksGettedBySearch];
      // Remove the duplicate stocks and remain only the starred stocks
      const result = [];
      const map = new Map();
      for (const item of concatStocks) {
          if(!map.has(item.symbol)){
              map.set(item.symbol, true);
              result.push(item);
          }
      }
      return result;
    case TOGGLE_STAR_STOCK:
      return currentStocks.map(stock =>
        stock.symbol === action.symbolStockId
          ? { ...stock, starred: !stock.starred }
          : stock
      );
    case CAN_BUY_STOCKS_BUTTON:
      return currentStocks.filter(stock => stock.currentPrice <= action.funds);
    case FOLLOWING_STOCKS_BUTTON:
      return currentStocks.filter(stock => !!stock.starred);
    default:
      return state;
  }
};

export default searchStocks;
