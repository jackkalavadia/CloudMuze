import * as AlbumApiUtil from "../util/album_util";
export const RECEIVE_ALBUM = "RECEIVE_ALBUM";
export const RECEIVE_ALBUMS = "RECEIVE_ALBUMS";
export const TOGGLE_ALBUM_LIKE = "TOGGLE_ALBUM_LIKE";

const receiveAlbum = (album) => {
  return {
    type: RECEIVE_ALBUM,
    album,
  };
};

const receiveAlbums = (albums) => {
  return ({
    type: RECEIVE_ALBUMS,
    albums,
  })
};

const toggleLike = (likeData) => {
  return ({
    type: TOGGLE_ALBUM_LIKE,
    likeData,
  })
}

export const fetchAlbum = id => dispatch => {
  return AlbumApiUtil.fetchAlbum(id)
    .then(album => { dispatch(receiveAlbum(album)) })
};

export const fetchAlbums = () => (dispatch) => {
  return AlbumApiUtil.fetchAlbums()
    .then((albums) => { dispatch(receiveAlbums(albums)) })
};

export const searchAlbums = (search) => (dispatch) => {
  return AlbumApiUtil.searchAlbums(search)
    .then((albums) => { dispatch(receiveAlbums(albums)) })
};

export const toggleAlbumLike = (likeData) => dispatch => {
  return AlbumApiUtil.toggleAlbumLike(likeData)
    .then(likeData => {dispatch(toggleLike(likeData))})
}