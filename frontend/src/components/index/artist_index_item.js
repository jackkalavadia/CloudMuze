import React from 'react';
import { Link } from 'react-router-dom';

class ArtistIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.playSongs = this.playSongs.bind(this);
  };

  playSongs(e) {
    e.preventDefault();
    this.props.playAllTracks(this.props.artist.songs);
  }
  render() {
    const artist = this.props.artist;
    return (
      <div>
        <Link to={`/open/artist/${artist._id}`} id={artist._id}>
      <div className="artist">
        <li><img className="artist-photo" src={artist.imageUrl} alt=""/></li>
        <li className="artist-name">{artist.name}</li>
        <li className="artist-description">Artist</li>
            <li><div className="play-button-album" onClick={(e) => this.playSongs(e)}><i className="fas fa-play-circle"></i></div></li>
      </div>
        </Link>
      </div>
    )
  }
};

export default ArtistIndexItem; 