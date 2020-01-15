import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

function ModalLink(props) {
  if (!props.isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className="modal">
      <div className="modal_container">
        <Link
          to={props.to}
          className="modal_close-button hover:bg-pink-700"
          onClick={props.onCloseModal}
        >
          X
        </Link>
        {props.children}
      </div>
    </div>,
    document.getElementById('modal')
  );
}

export default ModalLink;
