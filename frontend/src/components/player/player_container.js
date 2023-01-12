import { connect } from 'react-redux';
import Player from './player';
import { receiveVolume } from '../../actions/player_actions';
// import { fetchSongs } from '../../actions/song_actions';
import {
    playAllTracks,
    nextTrack,
    prevTrack,
    shuffleTracks,
    removeEverything,
} 
from '../../actions/player_queue_actions';
import { withRouter } from 'react-router-dom';


const mapStateToProps = state => ({
    volume: state.player.volume,
    currentTrack: state.queue[0],
    tracks: state.queue,
    nextTrack: state.queue[1]
});


const mapDispatchToProps = dispatch => ({
    changeVolume: volume => dispatch(receiveVolume(volume)),
    playAllTracks: (tracks) => dispatch(playAllTracks(tracks)),
    nextTrack: () => dispatch(nextTrack()),
    prevTrack: () => dispatch(prevTrack()),
    shuffleTracks: () => dispatch(shuffleTracks()),
    removeEverything: () => dispatch(removeEverything())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Player));