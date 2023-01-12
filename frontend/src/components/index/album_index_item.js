import React from 'react';
import { Link } from 'react-router-dom';

class AlbumIndexItem extends React.Component {
  constructor(props) {
    super(props)
    this.playSongs = this.playSongs.bind(this);
  };

  playSongs(e) {
    e.preventDefault();
    this.props.playAllTracks(this.props.album.songs);
  }
  render() {
    const album = this.props.album;
    return (
      <div>
        <Link to={`/open/album/${album._id}`} id={album._id}>
          <div className="album">
            <li><img className="album-photo" src={album.imageUrl} alt=""/></li>
            <li className="album-name">{album.title}</li>
            <Link to={`/open/artist/${album.artist._id}`} id={album.artist._id}><li className="album-artist">{album.artist.name}</li></Link>
            <li><div className="play-button-album" onClick={(e) => this.playSongs(e)}><i className="fas fa-play-circle"></i></div></li>
            
          </div>
        </Link>
      </div>
    )
  }
};

export default AlbumIndexItem; 