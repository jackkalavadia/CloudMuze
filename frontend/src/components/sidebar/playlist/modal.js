import React from "react";
import { closeModal } from "../../../actions/modal_actions";
import CreatePlaylistContainer from "./create_playlist_container";
import ChoosePlaylistContainer from "./choose_playlist_container";
import { connect } from "react-redux";

function Modal({ modal, closeModal }) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal.modal) {
    case "createPlaylist":
      component = <CreatePlaylistContainer />;
      break;
    case "choosePlaylist":
      component = <ChoosePlaylistContainer songId={modal.songId} />;
      break;
    default:
      return null;
  }
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        {component}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
