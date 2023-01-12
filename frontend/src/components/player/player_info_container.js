import PlayerInfo from './player_info';
import { connect } from 'react-redux';
import {toggleLike} from '../../actions/song_actions'
import {fetchUser} from '../../actions/user_actions'

const mapStateToProps = state => ({
    currentTrack: state.queue[0],
    tracks: state.queue,
    nextTrack: state.queue[1],
    currentUserId: state.session.user.id,
    currentUser: state.entities.users[state.session.user.id]
})

const mapDispatchToProps = dispatch => ({
    toggleLike: (likeData)=> dispatch(toggleLike(likeData)),
    fetchUser: (id) => dispatch(fetchUser(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(PlayerInfo);