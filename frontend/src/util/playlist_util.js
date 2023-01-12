import axios from "axios";

export const createPlaylist = playlist => {
  return axios.post("/api/playlists/create", playlist);
};

export const addSongToPlaylist = (songId, playlistId) => {
  let data = { songId: songId };
  return axios.patch(`/api/playlists/addto/${playlistId}`, data)
};

export const fetchUserPlaylists = userId => {
  return axios.get(`/api/users/${userId}/playlists`);
};

export const fetchPlaylist = playlistId => {
  return axios.get(`/api/playlists/${playlistId}`);
};

export const deletePlaylist = playlistData => {
  return axios.delete(`/api/playlists/delete/${playlistData.playlistId}`)
}

export const renamePlaylist = playlistData => {
  return axios.patch(`/api/playlists/rename/${playlistData.playlistId}`, playlistData)
};

//to routes

