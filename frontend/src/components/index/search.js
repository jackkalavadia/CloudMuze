import React from 'react';
import SongIndexContainer from './songs_container';
import ArtistIndexContainer from './artist_container';
import AlbumIndexContainer from './album_container';
import Suggested from '../open/suggested';
class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    };
    this.update = this.update.bind(this);
    this.getResults = this.getResults.bind(this);
  }

  update(e) {
   e.preventDefault(); 
   this.setState({search: e.currentTarget.value});
   this.getResults(); 
  }

  getResults() {
    return this.state.search ? (
        <div className="open-player-body">
          <SongIndexContainer search={this.state.search} />
          <ArtistIndexContainer search={this.state.search} />
          <AlbumIndexContainer search={this.state.search} />
        </div>
        ) : <div><Suggested /></div>
  }

  render() {
    return (
      <div className="search-bar">
        <i className="fas fa-search search-glass"></i>
        <input
          className='search-input'
          placeholder='Search for Artists, Songs, or Albums'
          value={this.state.search}
          onChange ={(e) => this.update(e)}
          />
        {this.getResults()}   
      </div>
    )
  };
};

export default Search; 