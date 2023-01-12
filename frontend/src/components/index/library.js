import React from 'react';
import LikedSongs from './liked_index';
import PlaylistIndex from './playlist_index_container'
class Library extends React.Component {
  render() {
      return (
      <div className="open-player-body">
        <LikedSongs/>
        <PlaylistIndex/>
      </div>
  )};
};

export default Library; 