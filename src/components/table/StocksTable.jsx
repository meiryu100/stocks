import React from "react";
import PropTypes from "prop-types";
import RowTable from "./RowTable";
import {
  headersTableSearchFillter,
  headersTableMyStocks,
  SEARCH_FILLTER_TABLE,
  MY_STOCKS_TABLE,
  ROW_DETAILS_SEARCH_FILLTER_TABLE,
  ROW_DETAILS_MY_STOCKS_TABLE
} from "../../utils/consts";

const StocksTable = ({ type, searchStocks, myStocks }) => {
  const dataTableToShow = gettingDataByType(type, searchStocks, myStocks);
  const headerRowKey = `header-${type}`;

  return (
    <div className="generalTable">
      <RowTable
        data={gettingHeaderRowByType(
          type,
          headersTableSearchFillter,
          headersTableMyStocks
        )}
        key={headerRowKey}
        keyRow={headerRowKey}
        isFirstRowOfTable
      />
      {dataTableToShow.map(item => {
        const rowKey = `row-${type}-${item.symbol}`;
        return (
          <RowTable
            data={item}
            key={rowKey}
            keyRow={rowKey}
            isMyStockTable={type === MY_STOCKS_TABLE}
          />
        );
      })}
    </div>
  );
};

const gettingDataByType = (type, ...data) => {
  let returnData = "";
  switch (type) {
    case SEARCH_FILLTER_TABLE:
      returnData = JSON.parse(
        JSON.stringify(data[0], ROW_DETAILS_SEARCH_FILLTER_TABLE, 6)
      );
      break;
    case MY_STOCKS_TABLE:
    default:
      returnData = JSON.parse(
        JSON.stringify(data[1], ROW_DETAILS_MY_STOCKS_TABLE, 3)
      );
      break;
  }
  return returnData;
};

const gettingHeaderRowByType = (type, ...data) => {
  switch (type) {
    case SEARCH_FILLTER_TABLE:
      return data[0];
    case MY_STOCKS_TABLE:
    default:
      return data[1];
  }
};

StocksTable.propTypes = {
  type: PropTypes.string.isRequired
};

export default StocksTable;
