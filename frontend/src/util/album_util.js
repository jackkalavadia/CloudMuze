import axios from "axios";

export const fetchAlbums = () => {
  return axios.get("/api/albums");
};

export const fetchAlbum = id => {
  return axios.get(`/api/albums/${id}`);
};

export const searchAlbums = search => {
  return axios.get(`/api/albums/search/${search}`);
};

export const toggleAlbumLike = likeData => {
  return axios.patch(`api/albums/like/${likeData.albumId}`, likeData);
}