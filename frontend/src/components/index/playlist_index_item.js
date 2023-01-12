import React from 'react';
import { Link } from 'react-router-dom';

class PlaylistIndexItem extends React.Component {
  constructor(props) {
    super(props)
    this.playSongs = this.playSongs.bind(this);
  };

  playSongs(e) {
    e.preventDefault();
    this.props.playAllTracks(this.props.playlist.songs);
  }

  render() {
    const playlist = this.props.playlist;
    
    const src = playlist.songs.length !== 0 ? playlist.songs[0].imageUrl : '/static/images/playlist.png';
    let count;
    if (playlist.songs.length !== 0) {
      count = playlist.songs.length > 1 ? playlist.songs.length + " songs" : playlist.songs.length + " song"
    } else {  
      count = 'No songs yet';
    };

    return (
      <div>
        <Link to={`/open/playlist/${playlist._id}`} id={playlist._id}>
          <div className="album">
            <li><img className="album-photo" src={src} alt=""/></li> 
            <li className="album-name">{playlist.title}</li>
            <li className="song-count">{count}</li>
            <li><div className="play-button-album" onClick={(e) => this.playSongs(e)}><i className="fas fa-play-circle"></i></div></li>

          </div>
        </Link>
      </div>
    )
  }
};

export default PlaylistIndexItem; 