import React from 'react';
import Modal from 'react-modal';

const DecisionModal = (props) => (
    <Modal
        isOpen={!!props.selectedDecision}
        onRequestClose={props.handleDeleteSelectedDecision}
        contentLabel="Selected Decision"
        closeTimeoutMS={200}
        className="modal"
    >
        <h3 className="modal__title">Selected Decision</h3>
        {props.selectedDecision && <p className="modal__body">{props.selectedDecision}</p>}
        <button className="button" onClick={props.handleDeleteSelectedDecision}>Ok now</button>
    </Modal>
);

export default DecisionModal;