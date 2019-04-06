import React from "react";
import PropTypes from "prop-types";
import ColTableStock from "../../containers/colTableStock";

const RowTable = ({ keyRow, data, isFirstRowOfTable, isMyStockTable }) => (
  <ul className="rowTable">
    {Object.keys(data).map(item => (
      <ColTableStock
        key={`${keyRow}-${item}`}
        value={data[item]}
        symbolId={data.symbol}
        itemKey={item}
        stock={data}
        isFirstRowOfTable={isFirstRowOfTable}
      />
    ))}
    <ColTableStock
      key={`${keyRow}-buySellCell`}
      symbolId={data.symbol}
      value=""
      itemKey="buySellCell"
      stock={data}
      isFirstRowOfTable={isFirstRowOfTable}
      isMyStockTable={isMyStockTable}
    />
  </ul>
);

RowTable.propTypes = {
  keyRow: PropTypes.string.isRequired
};

export default RowTable;
