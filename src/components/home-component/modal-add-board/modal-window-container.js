import React from 'react';
import { connect } from 'react-redux';
import AddNewBoard from './modal-window';
import { changeToggleModalBoard, addNewBoard } from '../../../redux/app-reduser';
import { reset } from 'redux-form';

let AddBoardWindowContainer = ({changeToggleModalBoard, reset, addNewBoard}) => {

let closeModalWindow = () => {
    changeToggleModalBoard(false)
};

    let onSubmit = (formData) => {
        addNewBoard(formData);
        reset('add-new-board');
        closeModalWindow();
    };

    return (
        <AddNewBoard closeModalWindow={closeModalWindow} onSubmit={onSubmit} />
    )
};

export default connect(null, { changeToggleModalBoard, reset, addNewBoard })(AddBoardWindowContainer);

