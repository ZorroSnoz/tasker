import React from 'react';
import FormAddNewBoard from '../../redux-form/add-new-board';
import closeIcon from '../../../image/close.svg';

let AddBoardWindow = ({onSubmit, closeModalWindow}) => {

    return (
        <div className='modal-add-board modal-padding bg-dark rounded'>
            <div className='form-header'>
            <h6 className='text-light'>Add new board</h6>
            <img onClick={() => closeModalWindow()} src={closeIcon} />
            </div>
            <div className='form-container'>
            <FormAddNewBoard onSubmit={onSubmit} />
            </div>
        </div>
    )
};

export default AddBoardWindow;

