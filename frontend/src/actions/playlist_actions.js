import * as PlaylistUtil from "../util/playlist_util";
export const RENAME_PLAYLIST = "RENAME_PLAYLIST;"
export const RECEIVE_PLAYLIST = "RECEIVE_PLAYLIST";
export const RECEIVE_USER_PLAYLISTS = "RECEIVE_USER_PLAYLISTS";
export const SHOW_PLAYLIST = "SHOW_PLAYLIST";
export const DELETE_PLAYLIST = "DELETE_PLAYLIST"



const receivePlaylist = playlist => {
  return {
    type: RECEIVE_PLAYLIST,
    playlist
  };
};

const returnRename = playlist => {
  return {
    type: RENAME_PLAYLIST,
    playlist
  };
};

const receivePlaylists = playlists => {
  return {
    type: RECEIVE_USER_PLAYLISTS,
    playlists
  };
};

const deletePlaylist = playlist => {
  return {
    type: DELETE_PLAYLIST,
    playlist
  }
}
export const addSongToPlaylist = (songId, playlistId) => dispatch => {
  return PlaylistUtil.addSongToPlaylist(songId, playlistId).then(playlist =>
    dispatch(receivePlaylist(playlist))
  );
};

export const createPlaylist = playlist => dispatch => {
  return PlaylistUtil.createPlaylist(playlist).then(playlist =>
    dispatch(receivePlaylist(playlist))
  );
};

export const fetchUserPlaylists = userId => dispatch => {
  return PlaylistUtil.fetchUserPlaylists(userId).then(playlists =>
    dispatch(receivePlaylists(playlists))
  );
};

export const removePlaylist = playlistData => dispatch => {
  return PlaylistUtil.deletePlaylist(playlistData).then(playlist =>
    dispatch(deletePlaylist(playlist.data))
  )
}

export const renamePlaylist = playlistData => dispatch => {
  return PlaylistUtil.renamePlaylist(playlistData).then(playlist =>
    dispatch(returnRename(playlist))
  )
}


const showPlaylist = playlist => {
  return {
    type: SHOW_PLAYLIST,
    playlist
  }
}

export const fetchPlaylist = playlistId => dispatch => {
  return PlaylistUtil.fetchPlaylist(playlistId)
    .then(playlist => dispatch(showPlaylist(playlist)));
};

