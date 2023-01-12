import GenreShow from "./genre_show";
import { connect } from 'react-redux';
import { fetchSongsByGenre } from '../../actions/song_actions';
import { playTrack, addTrack } from '../../actions/player_queue_actions';
import { addSongToPlaylist } from '../../actions/playlist_actions';
import { openModal, closeModal } from "../../actions/modal_actions";

const msp = (state) => {
  return { songs: state.entities.songs }
};

const mdp = () => dispatch => {
  return {
    fetchSongsByGenre: (genre) => dispatch(fetchSongsByGenre(genre)),
    playTrack: (song) => dispatch(playTrack(song)),
    addTrack: (song) => dispatch(addTrack(song)),
    addSongToPlaylist: (songId, playlistId) => dispatch(addSongToPlaylist(songId, playlistId)),
    openModal: (modal,songId) => dispatch(openModal(modal, songId)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(
  msp,
  mdp
)(GenreShow);