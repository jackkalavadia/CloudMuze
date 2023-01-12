import * as SongApiUtil from "../util/song_util";
export const RECEIVE_SONG = "RECEIVE_SONG";
export const RECEIVE_SONGS = "RECEIVE_SONGS";

export const TOGGLE_SONG_LIKE = "TOGGLE_SONG_LIKE";
export const CHANGE_MULTIPLE_SONG_LIKES = "CHANGE_MULTIPLE_SONG_LIKES"

const receiveSong = (song) => {
  return {
    type: RECEIVE_SONG,
    song
  };
};

const receiveSongs = (songs) => {
  return ({
    type: RECEIVE_SONGS,
    songs,
  })
};

const changeLike = (likeData) => {
  return ({
    type: TOGGLE_SONG_LIKE,
    likeData
  })
}

// const changeMultipleLikes = (likeData) => {
//   return ({
//     type: CHANGE_MULTIPLE_SONG_LIKES,
//     likeData
//   })
// }

export const fetchSong = id => dispatch => {
  return SongApiUtil.fetchSong(id)
    .then(song => { dispatch(receiveSong(song)) })
};

export const fetchSongs = () => (dispatch) => {
  return SongApiUtil.fetchSongs()
    .then((songs) => { dispatch(receiveSongs(songs)) })
};

export const fetchUserLiked = (userId) => (dispatch) => {
  return SongApiUtil.fetchUserLiked(userId)
    .then((songs) => { dispatch(receiveSongs(songs)) })
};

export const fetchSongsByGenre = (genre) => (dispatch) => {
  return SongApiUtil.fetchSongsByGenre(genre)
    .then((songs) => { dispatch(receiveSongs(songs)) })
};

export const searchSongs = (search) => (dispatch) => {
  return SongApiUtil.searchSongs(search)
    .then((songs) => { dispatch(receiveSongs(songs)) })
};

export const toggleLike = likeData => dispatch => {
  return SongApiUtil.toggleLike(likeData).then((likeData) => { dispatch(changeLike(likeData))});
}

// export const toggleMultipleLikes = likeData => dispatch => {
//   return SongApiUtil.toggleMultipleLikes(likeData).then((likeData) => {dispatch(changeMultipleLikes(likeData))})
// }