import React from 'react';
import ModalAddBoardItem from './add-board-item';
import { reset } from 'redux-form';
import { connect } from 'react-redux';
import {changeToggleModalAddBoardItem, addNewBoardItem} from '../../../redux/app-reduser';


let ModalAddBoardItemContainer = ({changeToggleModalAddBoardItem, addNewBoardItem, reset}) => {

    let closeModalWindow = () => {
        changeToggleModalAddBoardItem(false);
    };
    
        let onSubmit = (formData) => {
            addNewBoardItem(formData);
            reset('add-new-board-item');
            closeModalWindow();
        };
    
    return (
        <ModalAddBoardItem onSubmit={onSubmit} closeModalWindow={closeModalWindow} />
    )
};

export default connect(null, {changeToggleModalAddBoardItem, addNewBoardItem, reset})(ModalAddBoardItemContainer);