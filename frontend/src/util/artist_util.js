import axios from "axios";

export const fetchArtists = () => {
  return axios.get("/api/artists");
};

export const fetchArtist = id => {
  return axios.get(`/api/artists/${id}`);
};

export const searchArtists = search => {
  return axios.get(`/api/artists/search/${search}`);
};