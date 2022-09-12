import React from "react";
import ReactModal from "react-modal";
import { useAppContext } from "../../state/context";
import "./NotificationModal.scss";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    zIndex: "10",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    border: "none",
    backgroundColor: "transparent",
  },
};

ReactModal.setAppElement("#root");

const NotificationModal = () => {
  const { isNotificationModalOpen, closeNotificationModal } = useAppContext();

  return (
    <ReactModal
      isOpen={isNotificationModalOpen}
      onRequestClose={closeNotificationModal}
      style={customStyles}
      contentLabel="Confirm Delete"
    >
      <section className="notification-modal__wrapper">
        <div className="notification-modal__content">
          <h2 className="notification-modal__title">Message received!</h2>
          <p className="notification-modal__description">I'll get back to you as soon as possible.</p>
        </div>
        <div>
          <button className="notification-modal__button" onClick={closeNotificationModal}>
            Close
          </button>
        </div>
      </section>
    </ReactModal>
  );
};

export default NotificationModal;
