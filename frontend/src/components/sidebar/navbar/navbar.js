import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/white-logo-black-music.png";
// import homeIcon from "../../../assets/images/home-icon.png";
// import magGlassIcon from "../../../assets/images/magnifying-glass-icon.png";
// import libraryIcon from "../../../assets/images/library-icon.png";
class SideBarNav extends React.Component {
  render() {
    // const search = "";
    return (
      <nav id="navBar">
        <Link className="navBar-link" to="/open">
        <div id="splash-logo" className="sidebar-Rock-N-Roll" style={{fontSize:'28px',
      fontWeight:'bold',padding:'9%'}}>Rock-N-Roll</div>
        </Link>
        <div id="navBar-header">
          <ul id="navBar-entry-points">
            <li>
              <div className="navBar-item">
                <Link className="navBar-link" to="/open">
                  <i class="fas fa-home home-icon"></i>
                  {/* <img className="home-icon" src={homeIcon} alt=""></img> */}
                  Home
                </Link>
              </div>
            </li>
            {/* <li>
              <div className="navBar-item">
                <Link className="navBar-link" to="/open/search">
                  <i class="fas fa-search magGlass-icon"></i>
                  Search
                </Link>
              </div>
            </li> */}
            <li>
              <div className="navBar-item">
                <Link className="navBar-link" to="/open/library">
                  <i class="fas fa-book libary-icon"></i>
                  {/* <img className="library-icon" src={libraryIcon} alt=""></img> */}
                  Albums
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default SideBarNav;
