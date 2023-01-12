import { connect } from 'react-redux';
import PlayerQueue from './player_queue';
import { 
    removeTrack, 
    moveUp,
    moveDown,
    removeAllTracks,
} from '../../actions/player_queue_actions'

const mapStateToProps = state => ({
    currentTrack: state.queue[0],
    nextTrack: state.queue[1],
    tracks: state.queue,
});

const mapDispatchToProps = dispatch => ({
    removeTrack: trackId => dispatch(removeTrack(trackId)),
    moveUp: track => dispatch(moveUp(track)),
    moveDown: track => dispatch(moveDown(track)),
    removeAll: () => dispatch(removeAllTracks())
});


export default connect(mapStateToProps, mapDispatchToProps)(PlayerQueue);