export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";

export const openModal = (modal, songId) => {
  return {
    type: OPEN_MODAL,
    data: {modal: modal, songId: songId}
  };
};

export const closeModal = () => {
  return {
    type: CLOSE_MODAL
  };
};
