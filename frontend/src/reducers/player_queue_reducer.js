import { 
    PLAY_TRACK,
    PLAY_ALL_TRACKS,
    ADD_TRACK,
    REMOVE_TRACK,
    REMOVE_ALL_TRACKS,
    NEXT_TRACK,
    PREV_TRACK,
    SHUFFLE_TRACKS,
    MOVE_UP,
    MOVE_DOWN,
    REMOVE_EVERYTHING
} from '../actions/player_queue_actions';

const playerQueueReducer = (state=[], action) => {
    Object.freeze(state);
    let nextState = [...state]
    switch (action.type) {
        case PLAY_TRACK:
            return [action.track];
        case PLAY_ALL_TRACKS:
            return action.tracks;
        case ADD_TRACK: 
            nextState.push(action.track);
            return nextState;
        case REMOVE_TRACK:
            return nextState.filter(track => track._id !== action.trackId);
        case REMOVE_ALL_TRACKS:
            return [nextState[0]];
        case NEXT_TRACK:
            nextState.push(nextState.shift());
            return nextState;
        case PREV_TRACK:
            nextState.unshift(nextState.pop());
            return nextState;
        case SHUFFLE_TRACKS:
            return shuffleArray(nextState, state[0]);
        case MOVE_UP: 
            return moveUp(nextState, action.track);
        case MOVE_DOWN: 
            return moveDown(nextState, action.track);
        case REMOVE_EVERYTHING:
            return [];
        default: 
            return state;
    }
}

const shuffleArray = (arr, first) => {
    let temp;
    let newPos;
    while (arr[0] === first) {
        for (let i=0; i < arr.length; i++) {
            newPos = Math.floor(Math.random() * (i+1));
            temp = arr[i];
            arr[i] = arr[newPos];
            arr[newPos] = temp;
        }
    }
    return arr;
}

const moveUp = (arr, track) => {
    let idx = arr.indexOf(track);
    if (idx !== 0) {
        arr[idx] = arr[idx-1]
        arr[idx-1] = track;
        return arr;
    } else {
        return arr;
    }

}

const moveDown = (arr, track) => {
    let idx = arr.indexOf(track);
    if (idx !== arr.length-1) {
        arr[idx] = arr[idx+1]
        arr[idx+1] = track;
        return arr;
    } else {
        return arr;
    }
}

export default playerQueueReducer;

