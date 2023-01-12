import React from "react";
import { Link } from "react-router-dom";
import Header from "../header/header";
import Footer from "../footer/footer";
class Splash extends React.Component {
  render() {
    return (
      <div id="app-container">
        <Header />
        <div id="colorsplash">
          <div id="splash-container">
            <h1>BIG CHILL</h1>
            <h4>SONGS AT EVERY STEPS. No credit card Needed</h4>
            <Link to="/open" className="launch-web-player-bttn">
              Get Started Now
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Splash;
