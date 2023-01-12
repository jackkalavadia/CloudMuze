import React from "react";
import { Link } from "react-router-dom";
import ReactDOM from 'react-dom';

class Playlist extends React.Component {
  constructor(props) {
    super(props);
    this.renderPlaylists = this.renderPlaylists.bind(this);
    this.closeOptions = this.closeOptions.bind(this)
    this.renderOptions = this.renderOptions.bind(this)
    this.renamePlaylist = this.renamePlaylist.bind(this)
    this.handleKeyDown = this.handleKeyDown.bind(this)
    this.deletePlaylist = this.deletePlaylist.bind(this)
    this.toggleRenamePopUp = this.toggleRenamePopUp.bind(this)
    this.state = {
      title: "",
      showDropDown: false,
      showRename: false,
      mouseCoordsleft: 0,
      mouseCoordsTop: 0,
      renameCoordsLeft: 0,
      renameCoordsTop: 0,
      currentTargetPlaylistId: null,
    }
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    if (this.props.currentUserId) {
      this.props.fetchUserPlaylists(this.props.currentUserId);
    }
    document.addEventListener('mousedown', this.handleClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClick, false);
  }

  handleClick(e) {
    const domNode = ReactDOM.findDOMNode(this);

    if (!domNode || !domNode.contains(e.target)) {
      this.setState({
        showDropDown: false
      });
    }
  }

  handleKeyDown(e){
    if (e.key === 'Enter') {
      const data = {
        playlistId: this.state.currentTargetPlaylistId,
        title: this.state.title
      }
      this.props.renamePlaylist(data)
      this.setState({ showRename: false })
    }
  }



  closeOptions() {
    this.setState({showDropDown: false})
  }

  renderOptions(e) {
    e.preventDefault()

    if (e.target.dataset.playlistid) {
      this.setState({
        targetedPlaylistContainer: e.target,
        showRename: false,
        showDropDown: !this.state.showDropDown,
        mouseCoordsLeft: e.clientX,
        mouseCoordsTop: e.clientY,
        currentTargetPlaylistId: e.target.dataset.playlistid
      })
    }
  }


  renamePlaylist() {
    return (e) => {
      let currentTargetRect = this.state.targetedPlaylistContainer.getBoundingClientRect();
      const e_offsetX = currentTargetRect.x,
        e_offsetY = currentTargetRect.y - 5;
      this.setState({
        showRename: !this.state.showRename,
        showDropDown: false,
        renameCoordsLeft: e_offsetX,
        renameCoordsTop: e_offsetY,
      }, () => this.setFocus())
      
    }
  }

  deletePlaylist(playlistId) {
    const data = {
      playlistId: playlistId,
      userId: this.props.currentUserId
    }
    return () => {
      this.props.removePlaylist(data)
      this.setState({
        showRename: false,
        showDropDown: !this.state.showDropDown
      })
    }
  }

  toggleRenamePopUp() {
    this.setState({showRename: false})
  }
  
  setFocus() {
    let input = document.getElementById("playlist-rename-input-field");
    input.focus();
  }


  renderPlaylists() {
    if (this.props.playlists) {
      let playlists = Object.assign({}, this.props.playlists);
      if (playlists['current']) delete playlists['current'];
      return (
        <div id="playlists-items-container" onContextMenu={this.renderOptions}>
          {this.state.showDropDown && <div className="playlist-options-popup" style={{ left: this.state.mouseCoordsLeft, top: this.state.mouseCoordsTop }}>
            <p className="option-choice" onClick={this.renamePlaylist(this.state.currentTargetPlaylistId)}>Rename Playlist </p>
            <p className="option-choice" onClick={this.deletePlaylist(this.state.currentTargetPlaylistId)}>Delete Playlist</p>
            <p className="option-choice" onClick={this.closeOptions}>Cancel</p>
          </div>}
          {
            Object.values(playlists).map((playlist, i) => (
              <Link
                to={`/open/playlist/${playlist._id}`}
                className="playlists-item-container"
                key={playlist._id}
                data-playlistid={playlist._id}
                onContextMenu={this.renderOptions}
              >
                {playlist.title}
              </Link>
            ))
          }
          {this.state.showRename && <input
            id="playlist-rename-input-field"
            className="playlist-rename-input-field"
            type="text"
            name="playlist-name"
            onChange={this.update("title")}
            placeholder="New Playlist Name"
            style={{ left: this.state.renameCoordsLeft, top: this.state.renameCoordsTop }}
            onContextMenu={this.toggleRenamePopUp}
            onKeyDown={this.handleKeyDown}
          ></input>
          }
          
          
        </div >
      );
    }
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  render() {
    return (
      <div className="playlist-container">
        <h4>Playlists</h4>
        <div className="navBar-item">
          <div
            className="navBar-link"
            onClick={() => this.props.openModal("createPlaylist")}
          >
            <i class="fas fa-plus-square"></i>
            {/* <img className="plus-icon" src={plusIcon} alt=""></img> */}
            Create Playlist
          </div>
        </div>
        <hr className="divider"></hr>
        {this.renderPlaylists()}
      </div>
    );
  }
}

export default Playlist;
