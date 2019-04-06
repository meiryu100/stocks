import React from "react";
import StocksTable from "../containers/StocksTable";
import { SEARCH_FILLTER_TABLE, MY_STOCKS_TABLE } from "../utils/consts";

const MiddleSection = () => (
  <section>
      <StocksTable key={SEARCH_FILLTER_TABLE} type={SEARCH_FILLTER_TABLE} />
      <div className="tableTitle">My Stocks</div>
      <StocksTable key={MY_STOCKS_TABLE} type={MY_STOCKS_TABLE} />
  </section>
);

export default MiddleSection;
