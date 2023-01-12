import React from 'react';
import { Link } from 'react-router-dom';
class LikedIndex extends React.Component {
  render() {
    const title = <h1 className="artists-list-title">Liked Songs</h1>
    return (
      <div className="likedsongs-index">
        {title}
        <div className="playlists-list">
          <div>
            <Link to="/open/likedsongs" id="likesongs">
              <div className="album">
                <li><img className="album-photo" src='/static/images/liked.png' alt=""/></li>
                <li className="album-name">Your Liked Songs</li>
                <li><div className="play-button-liked"><i className="fas fa-music"></i></div></li>
              </div>
            </Link>
          </div>
        </div>
      </div>
    )
  };
};

export default LikedIndex; 