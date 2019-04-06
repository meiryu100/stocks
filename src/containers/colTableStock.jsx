import { connect } from "react-redux";
import { toggleStarStock } from "../actions";
import { buyStock } from "../actions/buyStock";
import { sellStock } from "../actions/sellStock";
import ColTable from "../components/table/ColTable";

const mapStateToProps = state => ({
  currentFunds: state.userDetails.funds,
  myStocks: state.userDetails.myStocks
});

const mapDispatchToProps = dispatch => ({
  starredStock: symbolStockId => dispatch(toggleStarStock(symbolStockId)),
  buyStock: (symbolStockId, stock) => dispatch(buyStock(symbolStockId, stock)),
  sellStock: (symbolStockId, stock) => dispatch(sellStock(symbolStockId, stock)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ColTable);
