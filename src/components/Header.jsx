import React from "react";
import PropTypes from "prop-types";

class Header extends React.Component {
  componentWillMount() {
    const { fetchUserDetails } = this.props;
    fetchUserDetails();
  }

  render() {
    const { userName, funds } = this.props;

    return (
      <div className="header">
        <nav>
          <div>
            Current funds <strong>{funds}</strong>
          </div>
          <div>
            <strong>Welcome {userName}</strong>
          </div>
        </nav>
      </div>
    );
  }
}

Header.propTypes = {
  funds: PropTypes.number.isRequired,
  userName: PropTypes.string.isRequired,
  fetchUserDetails: PropTypes.func.isRequired
};

export default Header;
