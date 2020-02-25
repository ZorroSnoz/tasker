import React from 'react';
import closeIcon from '../../../image/close.svg';
import FormAddNewTask from '../../redux-form/add-new-task';

let ModalAddTask = ({onSubmit, closeModalWindow}) => {
    return (
        <div className='modal-add-board modal-padding bg-dark rounded'>
            <div className='form-header'>
                <h6 className='text-light'>Input new task</h6>
                <img onClick={() => {closeModalWindow()}} src={closeIcon} />
            </div>
            <div className='form-container'>
                <FormAddNewTask onSubmit={onSubmit} />
            </div>
        </div>
    )
};

export default ModalAddTask;