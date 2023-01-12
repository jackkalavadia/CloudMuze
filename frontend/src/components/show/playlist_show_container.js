import { connect } from "react-redux";
import PlaylistShow from "./playlist_show";
import { withRouter } from "react-router-dom";
import { fetchPlaylist } from '../../actions/playlist_actions';
import { playAllTracks, playTrack } from '../../actions/player_queue_actions';
const mapStateToProp = (state, ownProps) => {
  return {
    currentUserId: state.session.user.id,
    playlist: state.entities.playlist.current,
    username: state.session.user.username
  };
};
const mapDispatchToProp = dispatch => {
  return {
    fetchPlaylist: playlistId => dispatch(fetchPlaylist(playlistId)),
    playAllTracks: tracks => dispatch(playAllTracks(tracks)),
    playTrack: track => dispatch(playTrack(track))
  };
};
export default withRouter(connect(mapStateToProp, mapDispatchToProp)(PlaylistShow));