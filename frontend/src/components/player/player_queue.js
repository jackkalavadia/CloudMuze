import React from 'react';
import { Link } from 'react-router-dom'

class PlayerQueue  extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: ""
        }
        this.comingUp = this.comingUp.bind(this);
        this.closeTrack = this.closeTrack.bind(this); 
        this.moveUp = this.moveUp.bind(this);
        this.moveDown = this.moveDown.bind(this);
        this.clearTracks = this.clearTracks.bind(this);
    }

    comingUp() {
        let nextUp;
        if (this.props.nextTrack) {
           nextUp = this.props.tracks.slice(1).map((track, i) => (
                <div 
                    onClick={e => this.state.active !== track._id ? this.setState({active: track._id}) : this.setState({active: ""})} 
                    key={i} 
                    id={this.state.active === track._id ? "active" : null}
                    className={`pq-next-container ${track._id}`}>
                     <i className="fas fa-play"></i>
                     <div className="pq-details">
                         <span className="pq-title">
                             {track.title}
                         </span>
                       <h4 to={`/open/artist/${track.artist._id}`}><span className="pq-artist">
                            {track.artist.name}
                         </span></h4>
                    </div>
                    <ul className={this.state.active === track._id ? "pq-options-active" : "pq-options"}>
                        <li>
                            <i onClick={this.moveUp(track)} className="fas fa-arrow-up"></i>
                        </li>
                        <li>
                            <i onClick={this.moveDown(track)} className="fas fa-arrow-down"></i>
                        </li>
                        <li className="pq-close" onClick={this.closeTrack(track)}>
                            <i className="fas fa-times"></i>
                        </li>
                    </ul>
                 </div>
            ))
        }
       return nextUp;
    }


    moveUp(track) {
        return e => {
            e.stopPropagation();
            this.props.moveUp(track);
        }
    }

    moveDown(track) {
        return e => {
            e.stopPropagation();
            this.props.moveDown(track);
        }
    }

    closeTrack(track) {
        return e => {
            e.stopPropagation();
            this.props.removeTrack(track._id);
        }
    }

    clearTracks(e) {
        e.stopPropagation();
        this.props.removeAll();
    }

    render() {
        const { currentTrack } = this.props;
        if (!currentTrack) return (
            <div className="open-player-body">
                <div className="pq-container">
                    <h1>Play Queue (Empty)</h1>
                </div>
            </div>
        );
        
        return (
            <div className="open-player-body">
                <div className="pq-container">
                    <h1>Play Queue</h1>
                    <h2>Now Playing </h2>
                    <div onClick={e => this.state.active !== currentTrack._id ? this.setState({ active: currentTrack._id }) : this.setState({ active: "" })}
                        id={this.state.active === currentTrack._id ? "active" : null}
                        className={`pq-track-container ${currentTrack._id}`}>
                        <i className="fas fa-"></i>
                        <div className="pq-details">
                            <span className="pq-title">
                                {this.props.currentTrack.title}
                            </span>
                            <h4 to={`/open/artist/${currentTrack.artist._id}`}><span className="pq-artist">
                                {this.props.currentTrack.artist.name}
                            </span></h4>
                        </div>
                       <ul className={this.state.active === currentTrack._id ? "pq-options-active" : "pq-options"}>
                            <li>
                                <i onClick={this.moveUp(currentTrack)} className="fas fa-arrow-up"></i>
                            </li>
                            <li>
                                <i onClick={this.moveDown(currentTrack)} className="fas fa-arrow-down"></i>
                            </li>
                            <li className="pq-close" onClick={this.closeTrack(currentTrack)}>
                                <i className="fas fa-times"></i>
                            </li>
                        </ul>
                    </div>
                    <h2>Next Up {this.props.nextTrack ? <div id="pq-options-clear" onClick={this.clearTracks}>Clear All</div> : null }</h2>
                    {this.comingUp()}
                </div>
            </div>
        )
    }
}

export default PlayerQueue;