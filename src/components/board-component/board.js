import React from 'react';
import AddButton from '../add-button/button';
import backIcon from '../../image/back.svg';
import { NavLink } from 'react-router-dom';
import ModalWindowContainer from '../modal-window-container/modal-window';
import ModalAddBoardItemContainer from './modal-add-board-item/add-board-item-container';
import ModalAddTaskContainer from './modal-add-task-window/add-task-window-container';

let Board = ({ 
    boardItemsArr, 
    openModalAddBoardItem, 
    nameBoard, 
    addBoardItemWindow,
    addNewTaskWindow
}) => {
    return <>
        <div className='row'>
            <div className='header-container'>
                <NavLink className='back-button shadow-sm rounded-circle' to='/'><img src={backIcon} /></NavLink>
                <h1>{nameBoard}</h1>
            </div>
        </div>
        <div className='row d-flex jastify-content-center align-content-center'>
            {boardItemsArr}
        </div>
        <AddButton fun={openModalAddBoardItem} />
        <ModalWindowContainer Component={ModalAddBoardItemContainer} toogle={addBoardItemWindow} />
        <ModalWindowContainer Component={ModalAddTaskContainer} toogle={addNewTaskWindow} />
    </>
};


export default Board;