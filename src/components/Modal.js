import React from "react";
import "./Modal.scss";

export default class Modal extends React.Component {
   
    render() {
        const { header, closeButton, text, actions, closeModal, handleOutsideClick } = this.props;
        return (
        <div className="modal-wrapper" onClick={handleOutsideClick}>
            <div className="modal">
                <div className="modal-content">
                    <div className="modal-header">
                        <h2>{header}</h2>
                        {closeButton && (
                        <span className="modal-close" onClick={closeModal}>
                            &times;
                        </span>
                        )}
                    </div>
                    <div className="modal-body">
                        <p className="body-text">{text}</p>
                    </div>
                    <div className="modal-btn">{actions}</div>
                </div>
            </div>
        </div>);
    }
}