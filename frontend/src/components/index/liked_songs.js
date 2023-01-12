import React from 'react';
import SongIndexItem from './song_index_item';

class LikedSongs extends React.Component {
  componentDidMount() {
    this.props.fetchUserLiked(this.props.currentUserId);
  }

  render() {
 
    let liSongs;
    if (!this.props.songs) return null;
    if (this.props.songs.length === 0) return (
      <div className="album-page">
        <img className="album-background-photo" src="static/images/gradient.jpg" alt=""></img>
        <div className="open-player-body">
          <div className="artist-show-header">
            <img className="album-show-photo" src="static/images/liked.png" alt="" />
            <div className="album-header-info">
              <h1 className="album-show-title">No Liked Songs, Yet...</h1>
            </div>
          </div>
          <div className="album-show-songs">
            <p className="no-liked-title">Browse, listen and like! :)</p>
          </div>
        </div>
      </div>
    );
    let songs = this.props.songs;
    liSongs = Object.values(songs).map(song => <SongIndexItem key={song._id} song={song} addTrack={this.props.addTrack} playTrack={this.props.playTrack} addSongToPlaylist={this.props.addSongToPlaylist} openModal={this.props.openModal} closeModal={this.props.closeModal} />);
    let count = liSongs.length > 1 ? liSongs.length + " songs" : liSongs.length + " song"; 
    // const title = liSongs.length > 0 ? <h1 className="songs-list-title">Songs</h1> : <h1></h1>
    return (
      <div className="album-page">
        <img className="album-background-photo" src="static/images/gradient.jpg" alt=""></img>
        <div className="open-player-body">
          <div className="artist-show-header">
            <img className="album-show-photo" src="static/images/liked.png" alt=""/>
            <div className="album-header-info">
              <h1 className="album-show-title">Liked Songs</h1>
              <p className="album-show-count">{count}</p>
            </div>
          </div>
          <div className="album-show-songs">
            {liSongs}
          </div>
        </div>
      </div>
    )
  };
};

export default LikedSongs; 