import React from "react";
import PropTypes from "prop-types";

class SearchFillter extends React.Component {
  onKeyDownSearchStock = () => {
    const { fetchSearchStocks } = this.props;
    const queryString = this.searchInput.value;
    fetchSearchStocks(queryString);    
  };

  render() {
    const { canBuyStocks, followingStocks, funds } = this.props;

    return (
      <div className="searchFillter">
        <span className="tableTitle">Search & Fillter</span>
        <input
          type="text"
          placeholder="Search stock"
          onKeyUp={() => this.onKeyDownSearchStock()}
          ref={node => (this.searchInput = node)}
        />
        <div className="buttonsNearFillter">          
          <span className="btn canBuy" onClick={() => canBuyStocks(funds)}>
            CAN BUY
          </span>        
          <span className="btn following" onClick={() => followingStocks()}>
            FOLLOWING
          </span>
        </div>
      </div>
    );
  }
}

SearchFillter.propTypes = {
  fetchSearchStocks: PropTypes.func,
  canBuyStocks: PropTypes.func,
  followingStocks: PropTypes.func,
  funds: PropTypes.number
};

export default SearchFillter;
