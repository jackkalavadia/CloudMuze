//will use isAuthenticated boolean in our state to determine which set of links to render (thus the need for map state to props)

import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";

import Greeting from "./greeting";

const mapStateToProps = state => {
  return {
    currentUser: state.session.user,
    loggedIn: state.session.isAuthenticated
  };
};


export default connect(mapStateToProps, { logout })(Greeting);
