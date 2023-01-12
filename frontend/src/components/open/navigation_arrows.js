import React from "react";
import { withRouter } from "react-router-dom";
class NavigationArrows extends React.Component {
  constructor(props) {
    super(props);
    this.backCounter = 0;
    this.state = {
      backEnabled: false
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      this.backCounter = this.backCounter + 1;
      if (!this.state.backEnabled && this.backCounter > 0) {
        this.setState({
          backEnabled: true
        });
      } else if (this.backCounter === 0 && this.state.backEnabled === true) {
        this.setState({
          backEnabled: false
        });
      }
    }
  }

  goForward = () => {
    this.props.history.goForward();
  };

  goBackward = () => {
    this.props.history.goBack();
    this.backCounter = this.backCounter - 2;
  };

  render() {
    return (
      <div></div>
      // <div id="navigation-arrows-container">
      //   <button
      //     className={`navigation-arrow-circle ${
      //       this.state.backEnabled ? "" : "disabled"
      //       }`}
      //     title="Go Backward"
      //     onClick={this.goBackward}
      //     disabled={!this.state.backEnabled}
      //   >
      //     <svg viewBox="0 0 24 24" className="arrow">
      //       <path
      //         fill="currentColor"
      //         d="M15.54 21.15L5.095 12.23 15.54 3.31l.65.76-9.555 8.16 9.555 8.16"
      //       ></path>
      //     </svg>
      //   </button>

      //   <button
      //     className={`navigation-arrow-circle ${
      //       this.backCounter > 0 ? "" : "disabled"
      //       }`}
      //     title="Go Forward"
      //     onClick={this.goForward}
      //   >
      //     <svg viewBox="0 0 24 24" className="arrow">
      //       <path
      //         fill="currentColor"
      //         d="M7.96 21.15l-.65-.76 9.555-8.16L7.31 4.07l.65-.76 10.445 8.92"
      //       ></path>
      //     </svg>
      //   </button>
      // </div>
    );
  }
}

export default withRouter(NavigationArrows);
