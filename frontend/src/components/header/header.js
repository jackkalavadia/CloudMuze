import React from "react";
import logo from "../../assets/images/white-logo-black-music.png";
import Greeting from "../greeting/greeting_container";
class Header extends React.Component {
  render() {
    return (
      <div id="header-container">
      <div id="splash-logo" class="sidebar-Rock-N-Roll" bis_skin_checked="1" style={ {
      color:'black',fontWeight:'bold',fontSize:'25px',
        padding:'24px 0 25px 25 px'
      }} >Rock-N-Roll</div>
        <Greeting />
      </div >
    );
  }
}

export default Header;
