import { connect } from "react-redux";
import { canBuyStocks, followingStocks } from "../actions";
import { fetchSearchStocks } from "../actions/searchFillterStocks";
import SearchFillter from "../components/SearchFillter";

const mapStateToProps = state => ({
  funds: state.userDetails.funds
});

const mapDispatchToProps = (dispatch) => ({
  fetchSearchStocks: queryString => dispatch(fetchSearchStocks(queryString)),
  canBuyStocks: (funds) => dispatch(canBuyStocks(funds)),
  followingStocks: () => dispatch(followingStocks()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchFillter);
