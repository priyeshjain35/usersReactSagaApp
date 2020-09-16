import React from 'react';
import "./Modal.css";

const Modal = (props) => {

    return(
        // The Modal
        <div className="modal" style={{display: `${props.open ? 'block' : 'none'}`}}>

            <div className="modalContent">
                <span className="close" onClick={props.handleClose}>&times;</span>
                <h1>Alert</h1>
                {props.children}

                <div className="modalFooter">
                    <button onClick={props.handleConfirm}>OK</button>
                    <button onClick={props.handleClose}>Cancel</button>
                </div>
            </div>

        </div>
    );
}

export default Modal;