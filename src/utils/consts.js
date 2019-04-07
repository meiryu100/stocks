export const BASE_URL = "http://3.17.189.68/stock-exchange-service/";
export const SEARCH_FILLTER_TABLE = "searchFillterTable";
export const MY_STOCKS_TABLE = "myStocksTable";

export const END_POINTS = {
  PORTFOLIO: "portfolio",
  MARKET: {
    SEARCH: "market/search",
    BUY: "market/buy",
    SELL: "market/sell"
  }
};

// first table
export const headersTableSearchFillter = {
  stock: "Stock",
  symbol: "Symbol",
  startOfCommerce: "Start of Commerce",
  currentPrice: "Current Price",
  following: "Following"
};

export const ROW_DETAILS_SEARCH_FILLTER_TABLE = [
  "name",
  "symbol",
  "startOfCommerce",
  "currentPrice",
  "starred"
];

// second table
export const headersTableMyStocks = {
  symbol: "Symbol",
  Profitability: "Profitability"
};

export const ROW_DETAILS_MY_STOCKS_TABLE = ["symbol", "purchasePrice"];
