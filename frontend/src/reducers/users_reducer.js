import { RECEIVE_USER } from "../actions/user_actions";
import { TOGGLE_ALBUM_LIKE } from "../actions/album_actions";
import { CHANGE_MULTIPLE_SONG_LIKES, TOGGLE_SONG_LIKE } from "../actions/song_actions";
import { merge } from 'lodash';

export default function(state = {}, action) {
    let newState;
    let currentUserId;
    switch (action.type) {
        case RECEIVE_USER:
            const user = {};
            user[action.user.data._id] = action.user.data;
            delete user[action.user.data._id].password
            return merge({}, user, state);
        case TOGGLE_SONG_LIKE: 
            currentUserId = action.likeData.data.userId;
            newState = merge({}, state);
            if(newState[currentUserId].likedSongs.includes(action.likeData.data.songId)) {
                const index = newState[currentUserId].likedSongs.indexOf(action.likeData.data.songId);
                newState[currentUserId].likedSongs.splice(index,1);
            } else {
                newState[currentUserId].likedSongs.push(action.likeData.data.songId);
            }
            return newState;
        case TOGGLE_ALBUM_LIKE:
            newState = merge({}, state);
            currentUserId = action.likeData.data.userId;
            if(newState[currentUserId].likedAlbums.includes(action.likeData.data.albumId)) {
              const albumIdx = newState[currentUserId].likedAlbums.indexOf(action.likeData.data.albumId);
              newState[currentUserId].likedAlbums.splice(albumIdx,1);
            } else {
              newState[currentUserId].likedAlbums.push(action.likeData.data.albumId);
            }
            return newState;
        case CHANGE_MULTIPLE_SONG_LIKES:
            newState = merge({}, state);
              if(action.likeData.data.songs.every((song) => newState.currentUser.likedSongs.includes(song))) {
                action.likeData.data.songs.forEach(song => {
                  let songIdx = newState.currentUser.likedSongs.indexOf(song);
                  newState.currentUser.likedSongs.splice(songIdx, 1);
                })
              } else {
                action.likeData.data.songs.forEach(song => {
                  if (!newState.currentUser.likedSongs.includes(song)) {
                    newState.currentUser.likedSongs.push(song)
                  }
                }) 
              }
            return newState;
        default:
            return state;
    }
}