import React from 'react';
import AlbumSongIndexItem from '../index/album_song_index_item';
import { Link } from 'react-router-dom';

class AlbumShow extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      albumLiked: null,
    }
    
    this.toggleAlbumLike = this.toggleAlbumLike.bind(this);
    this.renderAlbumLike = this.renderAlbumLike.bind(this);
  }
  componentDidMount() {
    this.props.fetchAlbum(this.props.match.params.id);
    this.props.fetchUser(this.props.currentUserId);
    // this.setState();
  }

  renderAlbumLike() {
  
    if (this.props.currentUser && this.props.currentUser.likedAlbums.includes(this.props.match.params.id)) {
      return (
        <i className="fas fa-heart"></i>
        )
      } else {
        return (
          <i className="far fa-heart"></i>
          )
        }
      }
      
  toggleAlbumLike() {
    const likeData = {
      userId: this.props.currentUser._id,
      albumId: this.props.match.params.id,
    }
    this.props.toggleAlbumLike(likeData)
    this.setState({
      albumLiked: this.props.currentUser.likedAlbums.includes(this.props.album._id)
    });
  }

  render() {
    let liSongs;
    if (!this.props.album[this.props.match.params.id]) return null;
    let album = this.props.album[this.props.match.params.id];
    let songs = album.songs;
    if (album) {
      liSongs = songs.map(song => <AlbumSongIndexItem key={song.id} song={song} playTrack={this.props.playTrack} addTrack={this.props.addTrack} addSongToPlaylist={this.props.addSongToPlaylist} openModal={this.props.openModal} closeModal={this.props.closeModal} />);
    }
    return (
        <div className="album-page"> 
          <img className="album-background-photo" src="static/images/gradient.jpg" alt=""></img>
          <div className="open-player-body">
          <div className="artist-show-header">
            <img className="album-show-photo" src={album.imageUrl} alt=""/>
            <div className="album-header-info">
            <h1 className="album-show-title">{album.title}</h1>
            <div className="album-by">By <Link className="album-artist-name" to={`/open/artist/${album.artist._id}`} id={album.artist._id}>{album.artist.name}</Link></div>
            <p className="album-year">{album.year}  •  {songs.length} SONGS</p>
            <div className="album-show-interactive">
                <button className="album-show-play" onClick={(e) => this.props.playAllTracks(songs)}>PLAY</button>
                <div className="like-album" onClick={this.toggleAlbumLike}>{this.renderAlbumLike()}</div>
                <p className="album-options"><i className="fas fa-ellipsis-h" aria-hidden="true"></i></p>
            </div>
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

export default AlbumShow; 