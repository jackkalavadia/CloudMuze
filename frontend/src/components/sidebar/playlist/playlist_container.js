import { connect } from "react-redux";
import Playlist from "./playlist";
import { openModal, closeModal } from "../../../actions/modal_actions";
import { fetchUserPlaylists, removePlaylist, renamePlaylist} from "../../../actions/playlist_actions";

const mapStateToProps = state => ({
  playlists: state.entities.playlist,
  currentUserId: state.session.user.id
});

const mapDispatchToProps = dispatch => ({
  openModal: modal => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal()),
  fetchUserPlaylists: userId => dispatch(fetchUserPlaylists(userId)),
  removePlaylist: (playlistData) => dispatch(removePlaylist(playlistData)),
  renamePlaylist: (playlistData) => dispatch(renamePlaylist(playlistData))
});

export default connect(mapStateToProps, mapDispatchToProps)(Playlist);
