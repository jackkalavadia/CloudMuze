import React from 'react';
import { Link } from 'react-router-dom';
// import { playTrack } from '../../actions/player_queue_actions';

class SongIndexItem extends React.Component {
  constructor(props) {
    super(props)
    this.handleToggle = this.handleToggle.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.state = {
      songId: this.props.song._id
    }
  };

  handleAdd = (e) => {
    e.preventDefault();
    this.props.openModal("choosePlaylist", this.state.songId);
  }

  handleToggle = (e, songId) => {
    e.preventDefault();

    let songOptions = document.getElementById(songId);

    if (songOptions) {
      songOptions.classList.toggle("show");
    }
  }

  render() {
    const song = this.props.song;
    return (
      <div className="song" >
          <li><img className="song-photo" src={song.imageUrl} alt=""/></li> 
          <li className="song-item-info">
          <p className="song-title">{song.title}</p>
          <Link to={`/open/artist/${song.artist._id}`} id={song.artist._id}>
            <p className="song-artist">{song.artist.name}</p>
          </Link>
          <div className="play-button" onClick={(e) => this.props.playTrack(song)}><i className="fas fa-play-circle"></i></div>
          <div className="options-song" onClick={(e) => this.handleToggle(e, song._id)}><i className="fa fa-ellipsis-h" aria-hidden="true"></i>
          <div className="options-popup"><div className="optionstext" id={song._id}>
              <p className="option-choice" onClick={(e) => this.handleAdd(e)}>Add To Playlist</p>
              {/* <p className="option-choice" onClick={(e) => this.props.addTrack(song)}>Add To Queue</p> */}
              <p className="option-choice" onClick={(e) => this.props.playTrack(song)}>Play Song</p>
              </div>
              </div>
          </div>
          </li>
        </div>
    )
  }
};

export default SongIndexItem; 