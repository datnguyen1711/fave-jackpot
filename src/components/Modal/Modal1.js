import React from "react";
import ReactDOM from "react-dom";
import "./Modal.scss";
import dangerIcon from "../../assets/images/icons/danger.svg";

const Modal1 = ({ title, content, titleButton, showPrompt, confirmNavigation, cancelNavigation }) => {
    return (
        <div className={`${showPrompt ? '' : 'hidden'}`}>
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
                        <button className="modal-button" onClick={cancelNavigation}>
                            {titleButton}
                        </button>
                        <button className="modal-exit" onClick={confirmNavigation}>Exit now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal1;
