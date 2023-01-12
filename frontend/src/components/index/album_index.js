import React from 'react';
import AlbumIndexItem from './album_index_item';

class AlbumsIndex extends React.Component {
  componentDidMount() {
    this.props.searchAlbums(this.props.search);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.search !== this.props.search) {
      this.props.searchAlbums(this.props.search);
    }
  }

  render() {
    let liAlbums;
    if (!this.props.albums || this.props.albums.length === 0) return null;
    let albums = this.props.albums;

    liAlbums = Object.values(albums).map(album => <AlbumIndexItem key={album._id} album={album} playAllTracks={this.props.playAllTracks} />);
    //changed from <h1></h1> to null
    const title = liAlbums.length > 0 ? <h1 className="artists-list-title">Albums</h1> : null
    return (
      <div>
        {title}
        <div className="artists-list">
          {liAlbums}
        </div>
      </div>
    )
  };
};

export default AlbumsIndex; 