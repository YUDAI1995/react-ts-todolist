import React from "react";
import "../css/Modal.scss";

interface ModalProps {
  modalShow: boolean;
  setModalShow: (modalShow: boolean) => void;
}

export const Modal: React.FC<ModalProps> = ({ modalShow, setModalShow }) => {
  return modalShow ? (
    <div id="alertModalWrapper">
      <div className="overlay">
        <div className="content">
          <div className="text">
            <p>Please enter something to do.</p>
          </div>
          <button onClick={setModalShow.bind(null, false)} className="closeBtn">
            Close
          </button>
        </div>
      </div>
    </div>
  ) : null;
};
