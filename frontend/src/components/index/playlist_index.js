import React from 'react';
import PlaylistIndexItem from './playlist_index_item';

class PlaylistIndex extends React.Component {
  componentDidMount() {
    this.props.fetchUserPlaylists(this.props.currentUserId);
  }

  render() {
    let divClass;
   
    if (this.props.location) {
    divClass = this.props.location.pathname === "/open/library" ? "open-player-body" : "home-page";
    };
    let liPlaylists;
    if (!this.props.playlists || this.props.playlists.length === 0) return null;
    let playlists = this.props.playlists;

    liPlaylists = Object.values(playlists).map(playlist => <PlaylistIndexItem key={playlist._id} playlist={playlist} playAllTracks={this.props.playAllTracks}/>);
    //changed from <h1></h1> to null
    const title = liPlaylists.length > 0 ? <h1 className="artists-list-title">Playlists</h1> : null
    return (
      <div className={divClass}>
        {title}
        <div className="playlists-list">
          {liPlaylists}
        </div>
      </div>
    )
  };
};

export default PlaylistIndex; 