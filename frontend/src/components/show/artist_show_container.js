import ArtistShow from "./artist_show";
import { connect } from 'react-redux';
import { fetchArtist } from '../../actions/artist_actions';
import { playTrack, addTrack } from '../../actions/player_queue_actions';
import { addSongToPlaylist } from '../../actions/playlist_actions';
import { openModal, closeModal } from "../../actions/modal_actions";

const msp = (state) => {
  return { artist: state.entities.artists };
};

const mdp = () => dispatch => {
  return {
    fetchArtist: (id) => dispatch(fetchArtist(id)),
    playTrack: (song) => dispatch(playTrack(song)),
    addTrack: (song) => dispatch(addTrack(song)),
    addSongToPlaylist: (songId, playlistId) => dispatch(addSongToPlaylist(songId, playlistId)),
    closeModal: () => dispatch(closeModal()),
    openModal: (modal, songId) => dispatch(openModal(modal, songId))

  };
};

export default connect(
  msp,
  mdp
)(ArtistShow);