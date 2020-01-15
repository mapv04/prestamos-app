import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

function Modal(props) {
  if (!props.isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className="modal">
      <div className="modal_container">
        <button
          className="modal_close-button hover:bg-pink-700"
          onClick={props.onCloseModal}
        >
          X
        </button>
        ;{props.children}
      </div>
    </div>,
    document.getElementById('modal')
  );
}

export default Modal;
