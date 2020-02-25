import React from 'react';
import { reset } from 'redux-form';
import { connect } from 'react-redux';
import ModalAddTask from './add-task-window';
import {changeToggleModalAddTask, addNewTask} from '../../../redux/app-reduser';

let ModalAddTaskContainer = ({reset, changeToggleModalAddTask, addNewTask}) => {

    let closeModalWindow = () => {
        changeToggleModalAddTask(false);
    };
    
        let onSubmit = (formData) => {
            addNewTask(formData)
            reset('add-new-task');
            closeModalWindow();
        };
    
    return (
        <ModalAddTask onSubmit={onSubmit} closeModalWindow={closeModalWindow} />
    )
};

export default connect(null, {reset, changeToggleModalAddTask, addNewTask})(ModalAddTaskContainer);