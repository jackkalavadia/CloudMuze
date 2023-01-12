import LikedSongs from "./liked_songs";
import { connect } from 'react-redux';
import { fetchSongs, searchSongs, fetchUserLiked } from '../../actions/song_actions';
import { playTrack, addTrack } from '../../actions/player_queue_actions';
import { addSongToPlaylist } from '../../actions/playlist_actions';
import { openModal, closeModal } from "../../actions/modal_actions";


const msp = (state) => {
  return { songs: state.entities.songs,
           currentUserId: state.session.user.id };
};

const mdp = () => dispatch => {
  return {
    fetchSongs: () => dispatch(fetchSongs()),
    searchSongs: (search) => dispatch(searchSongs(search)),
    playTrack: (track) => dispatch(playTrack(track)),
    addTrack: (track) => dispatch(addTrack(track)),
    addSongToPlaylist: (songId, playlistId) => dispatch(addSongToPlaylist(songId, playlistId)),
    openModal: (modal, songId) => dispatch(openModal(modal, songId)),
    fetchUserLiked: (userId) => dispatch(fetchUserLiked(userId)),
    closeModal: () => dispatch(closeModal())
  }
};

export default connect(
  msp,
  mdp
)(LikedSongs);