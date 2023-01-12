import React from "react";

class CreatePlaylist extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: ""
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.closeModal = this.props.closeModal.bind(this);
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    let playlist = {
      title: this.state.title,
      user: this.props.currentUserId
    };
    this.props.createPlaylist(playlist);
    this.props.closeModal();
  }

  handleClick(e) {
    e.preventDefault();
    this.props.closeModal();
  }

  render() {
    return (
      <div className="create-playlist-modal">
        <button className="btn-transparent" onClick={this.handleClick}>
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Close</title>
            <path
              d="M31.098 29.794L16.955 15.65 31.097 1.51 29.683.093 15.54 14.237 1.4.094-.016 1.508 14.126 15.65-.016 29.795l1.414 1.414L15.54 17.065l14.144 14.143"
              fill="#fff"
              fill0rule="evenodd"
            ></path>
          </svg>
        </button>
        <h1 className="transparant-header">Create New Playlist</h1>
        <div id="create-playlist-input-container">
          <div id="create-playlist-input-box">
            <div id="playlist-name-spacing">
              <input
                className="playlist-name-input-field"
                type="text"
                name="playlist-name"
                onChange={this.update("title")}
                placeholder="New Playlist"
              ></input>
            </div>
          </div>
        </div>
        <div id="form-buttons-container">
          <div id="cancel-button-container">
            <button className="cancel-button" onClick={this.handleClick}>
              Cancel
            </button>
          </div>
          <div id="create-button-container">
            <button
              className="create-button"
              onClick={e => this.handleSubmit(e)}
            >
              create
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default CreatePlaylist;
