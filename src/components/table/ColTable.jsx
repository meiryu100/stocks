import React from "react";
import PropTypes from "prop-types";

class ColTable extends React.Component {
  render() {
    const {
      value,
      itemKey,
      symbolId,
      starredStock,
      buyStock,
      sellStock,
      stock,
      isFirstRowOfTable,
      isMyStockTable,
      currentFunds,
      myStocks
    } = this.props;
    
    const isShowBuyButton = currentFunds >= stock.currentPrice && !isMyStockTable;
    const isShowSellButton = myStocks.filter(myStock => myStock.symbol === stock.symbol).length > 0;

    return (
      <li className="colTable">
        {itemKey === "starred" ? (
          <input
            type="checkbox"
            name={symbolId}
            checked={!!value}
            onChange={() => starredStock(symbolId)}
          />
        ) : itemKey === "buySellCell" && !isFirstRowOfTable ? (
          <div className="buySellCell">
            { isShowBuyButton && (
              <span className="btn buy" onClick={() => buyStock(symbolId, stock)}>
                BUY
              </span>
            )}
            { isShowSellButton && (
              <span className="btn sell" onClick={() => sellStock(symbolId, stock)}>
                SELL
              </span>
            )}
          </div>
        ) : (
          value
        )}
      </li>
    );
  }
}

ColTable.propTypes = {
  itemKey: PropTypes.string.isRequired,
  symbolId: PropTypes.string.isRequired,
  starredStock: PropTypes.func.isRequired,
  buyStock: PropTypes.func.isRequired,
  sellStock: PropTypes.func.isRequired,
  isFirstRowOfTable: PropTypes.bool,
  isMyStockTable: PropTypes.bool,
  currentFunds: PropTypes.number
};

export default ColTable;
