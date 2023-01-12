import Search from "./search";
import { connect } from 'react-redux';
import { fetchSongs } from '../../actions/song_actions';

const msp = (state) => {
  return { songs: state.entities.songs };
};

const mdp = () => dispatch => {
  return { fetchSongs: () => dispatch(fetchSongs()) };
};

export default connect(
  msp,
  mdp
)(Search);