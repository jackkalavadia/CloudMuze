import React from "react";
import { Link } from "react-router-dom";
// import { browserHistory } from "react-router";
class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }

  getLinks() {
    if (this.props.loggedIn) {
      return (
        <div className="greeting-container">
          <h2 className="header-name">
            Hello, {this.props.currentUser.username}
          </h2>
          <Link className="nav-link" onClick={this.logoutUser} to="">

            Logout
          </Link>
        </div>
      );
    } else {
      return (
        <div>
          <Link className="nav-link" to={"/signup"}>
            Signup
          </Link>
          <Link className="nav-link" to={"/login"}>
            Login
          </Link>
        </div>
      );
    }
  }

  render() {
    return <div className="navbar-container">{this.getLinks()}</div>;
  }
}

export default Greeting;
