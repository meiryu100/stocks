import { connect } from "react-redux";
import StocksTable from "../components/table/StocksTable";

const mapStateToProps = state => ({
  searchStocks: state.searchStocks,
  myStocks: state.userDetails.myStocks
});

export default connect(mapStateToProps)(StocksTable);
