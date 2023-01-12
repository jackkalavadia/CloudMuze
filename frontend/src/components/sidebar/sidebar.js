import React from "react";
import SideBarNav from "./navbar/navbar";
import Playlist from "./playlist/playlist_container";

class SideBar extends React.Component {
  render() {
    return (
      <div className="root-navBar">
        <div className="sidebar-container">
          <SideBarNav />
          <Playlist />
        </div>
      </div>
    );
  }
}

export default SideBar;
