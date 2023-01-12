import { connect } from "react-redux";
import ChoosePlaylist from "./choose_playlist";
import { openModal, closeModal } from "../../../actions/modal_actions";
import { addSongToPlaylist } from '../../../actions/playlist_actions'; 
import { fetchUserPlaylists } from '../../../actions/playlist_actions';

const mapStateToProps = state => {
  return {currentUser: state.session.user,
          playlists: state.entities.playlist}
};

const mapDispatchToProps = dispatch => ({
  openModal: modal => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal()),
  addSongToPlaylist: (songId, playlistId) => dispatch(addSongToPlaylist(songId, playlistId)),
  fetchUserPlaylists: (userId) => dispatch(fetchUserPlaylists(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ChoosePlaylist);