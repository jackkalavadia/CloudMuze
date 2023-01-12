import React from 'react';
import SongIndexItem from '../index/song_index_item';


class GenreShow extends React.Component {
  componentDidMount() { 
    this.props.fetchSongsByGenre(this.props.match.params.genre);
  }

  render() {

    let liSongs;
    if (!this.props.songs || this.props.songs.length === 0) return null;
    let songs = this.props.songs;
    liSongs = Object.values(songs).map(song => <SongIndexItem key={song._id} song={song} addTrack={this.props.addTrack} playTrack={this.props.playTrack} addSongToPlaylist={this.props.addSongToPlaylist} openModal={this.props.openModal} closeModal={this.props.closeModal} />);
    let genre; 
    if (this.props.match.params.genre === "softrock") {
      genre = "Soft Rock";
    } else if (this.props.match.params.genre === "altrock") {
      genre = "Alternative Rock";
    } else if (this.props.match.params.genre === "classicrock") {
      genre = "Classic Rock";
    }
    return (
      <div className="genre-page">
        <img className="genre-background-photo" src="static/images/gradient2.jpg" alt=""></img>
        <div className="open-player-body">
          <div className="genre-show-header">
            <img className="genre-show-photo" src={"static/images/" + this.props.match.params.genre + (".png")} alt=""/>
            <div className="genre-header-info">
              <h1 className="genre-show-title">{genre}</h1>
            </div>
          </div>
          <div className="genre-show-songs">
            {liSongs}
          </div>
        </div>
      </div>
    )
  };
};

export default GenreShow; 