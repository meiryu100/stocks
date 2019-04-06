import { connect } from "react-redux";
import { fetchUserDetails } from "../actions/userDetails";
import Header from "../components/Header";

const mapStateToProps = state => ({
  userName: state.userDetails.username,
  funds: state.userDetails.funds
});

const mapDispatchToProps = dispatch => ({
  fetchUserDetails: () => dispatch(fetchUserDetails())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
