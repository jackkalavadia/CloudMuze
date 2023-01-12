import { RECEIVE_ALBUM, RECEIVE_ALBUMS } from '../actions/album_actions';

const albumsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_ALBUM:
      return Object.assign({}, oldState, { [action.album.data._id]: action.album.data });
    case RECEIVE_ALBUMS:
      return action.albums.data;
    default:
      return oldState;
  }
};

export default albumsReducer;