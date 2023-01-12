import axios from "axios";

export const fetchSongs = () => {
  return axios.get("/api/songs");
};

export const fetchSong = id => {
  return axios.get(`/api/songs/${id}`);
};

export const searchSongs = search => {
  return axios.get(`/api/songs/search/${search}`);
};

export const fetchSongsByGenre = genre => {
  return axios.get(`/api/songs/genre/${genre}`);
};

export const fetchUserLiked = userId => {
  return axios.get(`/api/users/${userId}/likedSongs`);
};

export const toggleLike = (likeData) => {
  return axios.patch(`/api/songs/like/${likeData.songId}`, likeData);
};

// export const toggleMultipleLikes = (likeData) => {
//   return axios.patch('api/songs/like', likeData);
// }