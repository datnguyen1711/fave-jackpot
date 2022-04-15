import React from "react";
import ReactDOM from "react-dom";
import "./Modal.scss";
import dangerIcon from "../../assets/images/icons/danger.svg";

const Modal = ({ title, content, handleClick, onExit }) => {
  return ReactDOM.createPortal(
    <div className={`modal`}>
      <div className="modal-container">
        <div className="modal-top">
          <img src={dangerIcon} alt="" />
        </div>
        <div className="modal-main">
          <h2 className="modal-title">{title}</h2>
          <p className="modal-content">{content}</p>
        </div>
        <div className="modal-bot">
          <button className="modal-button" onClick={handleClick}>
            Back to home
          </button>
          {onExit ? <button className="modal-exit">Exit now</button> : <></>}
        </div>
      </div>
    </div>,
    document.querySelector("body")
  );
};

export default Modal;
