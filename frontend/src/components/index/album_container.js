import AlbumIndex from "./album_index";
import { connect } from 'react-redux';
import { fetchAlbums, searchAlbums } from '../../actions/album_actions';
import { playAllTracks } from '../../actions/player_queue_actions';

const msp = (state) => {
  return { albums: state.entities.albums };
};

const mdp = () => dispatch => {
  return {
    fetchAlbums: () => dispatch(fetchAlbums()),
    searchAlbums: (search) => dispatch(searchAlbums(search)),
    playAllTracks: (songs) => dispatch(playAllTracks(songs))
  };
};

export default connect(
  msp,
  mdp
)(AlbumIndex);