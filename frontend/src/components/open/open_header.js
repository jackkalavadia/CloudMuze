import React from "react";
import GreetingContainer from "../greeting/greeting_container";
import NavigationArrows from "./navigation_arrows";
class OpenHeader extends React.Component {

  render() {
    return (
      <div id="open-header-container">
        <NavigationArrows />
        <GreetingContainer />
      </div>
    );
  }
}

export default OpenHeader;
