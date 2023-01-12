import React from 'react';
import SongIndexItem from './song_index_item';

class SongsIndex extends React.Component {
  componentDidMount() {
    this.props.searchSongs(this.props.search);
  }

  componentDidUpdate(prevProps) {
    if (this.props.search && prevProps.search !== this.props.search) {
    this.props.searchSongs(this.props.search);
    }
  }

  render() {
    let liSongs;
    if (!this.props.songs || this.props.songs.length === 0) return null;
    let songs = this.props.songs;
    liSongs = Object.values(songs).map(song => <SongIndexItem key={song._id} song={song} addTrack={this.props.addTrack} playTrack={this.props.playTrack} addSongToPlaylist={this.props.addSongToPlaylist} openModal={this.props.openModal} closeModal={this.props.closeModal}/>);
    //changed from <h1><h1> to null
    const title = liSongs.length > 0 ? <h1 className="songs-list-title">Songs</h1> : null
    return (
      <div>
        {title}
        <div className="songs-list">
          {liSongs}
        </div>
      </div>
    )
  };
};

export default SongsIndex; 