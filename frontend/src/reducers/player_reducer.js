import { RECEIVE_VOLUME } from '../actions/player_actions';

const playerReducer = (state = { volume: 0.5 }, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_VOLUME:
            return Object.assign({}, state, { volume: action.volume })
        default:
            return state;
    }
}

export default playerReducer;