import React from 'react';
import FormAddNewBoardItem from '../../redux-form/add-new-board-item';
import closeIcon from '../../../image/close.svg';

let ModalAddBoardItem = ({onSubmit, closeModalWindow}) => {
    return (
        <div className='modal-add-board modal-padding bg-dark rounded'>
            <div className='form-header'>
                <h6 className='text-light'>Input board item name</h6>
                <img onClick={() => {closeModalWindow()}} src={closeIcon} />
            </div>
            <div className='form-container'>
                <FormAddNewBoardItem onSubmit={onSubmit} />
            </div>
        </div>
    )
};

export default ModalAddBoardItem;