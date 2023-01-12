import { RECEIVE_SONG, RECEIVE_SONGS } from '../actions/song_actions';

const songsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_SONG:
      return Object.assign({}, oldState, { [action.song._id]: action.song });
    case RECEIVE_SONGS: 
      return action.songs.data;
    default:
      return oldState;
  }
};

export default songsReducer;