import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props)=>{
    return (
        <Modal
        isOpen = {!!props.selectedOption}
        onRequestClose = {props.handleClearSelectedOption}
        contentLabel = "Selected Option"
        closeTimeoutMs={200}
        className="modal"
         >
            <h3 className="modal">Selected Option</h3>
            {props.selectedOption && <p className="modal">{props.selectedOption}</p>}
            <button className="button" onClick = {props.handleClearSelectedOption}>okay</button>
        </Modal>

        
    );

}
export default OptionModal;