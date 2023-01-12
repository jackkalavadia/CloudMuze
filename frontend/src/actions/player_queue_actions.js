export const PLAY_TRACK = 'PLAY_TRACK';
export const PLAY_ALL_TRACKS = 'PLAY_ALL_TRACKS';
export const ADD_TRACK = 'ADD_TRACK'
export const REMOVE_TRACK = 'REMOVE_TRACK';
export const REMOVE_ALL_TRACKS = 'REMOVE_ALL_TRACKS';
export const NEXT_TRACK = 'NEXT_TRACK';
export const PREV_TRACK = 'PREV_TRACK';
export const SHUFFLE_TRACKS = 'SHUFFLE_TRACKS';
export const MOVE_UP = 'MOVE_UP';
export const MOVE_DOWN = 'MOVE_DOWN';
export const REMOVE_EVERYTHING = 'REMOVE_EVERYTHING';


export const playTrack = track => ({
    type: PLAY_TRACK,
    track
});

export const playAllTracks = tracks => ({
    type: PLAY_ALL_TRACKS,
    tracks
});

export const addTrack = track => ({
    type: ADD_TRACK,
    track
})

export const removeTrack = trackId => ({
    type: REMOVE_TRACK,
    trackId
});

export const removeAllTracks = () => ({
    type: REMOVE_ALL_TRACKS
});

export const removeEverything = () => ({
    type: REMOVE_EVERYTHING
});

export const nextTrack = () => ({
    type: NEXT_TRACK
});

export const prevTrack = () => ({
    type: PREV_TRACK
});

export const shuffleTracks = () => ({
    type: SHUFFLE_TRACKS
});

export const moveUp = track => ({
    type: MOVE_UP,
    track
});

export const moveDown = track => ({
    type: MOVE_DOWN,
    track
})