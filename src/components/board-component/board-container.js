import React, { useEffect } from 'react';
import BoardItem from './board-item/board-item';
import { connect } from 'react-redux';
import { 
    setBoardIndex, 
    changeToggleModalAddBoardItem, 
    changeToggleModalAddTask, 
    setTargetBoardItemId,
    deleteBoardItem,
    deleteTask,
    doneTask,
    moveTask } from '../../redux/app-reduser';
import Board from './board';

let BoardContainer = ({
     boardData, 
     setBoardIndex, 
     currentBoardId, 
     changeToggleModalAddBoardItem,
     addBoardItemWindow,
     changeToggleModalAddTask,
     addNewTaskWindow,
     setTargetBoardItemId,
     deleteBoardItem,
     deleteTask,
     doneTask,
     moveTask
     }) => {

    let thisBoardId = document.location.pathname.slice(7);
    let conditionForRender = boardData === undefined || currentBoardId !== thisBoardId;

    useEffect(() => {
        setBoardIndex(thisBoardId)
    }, []);

    let openModalAddBoardItem = () => {
        changeToggleModalAddBoardItem(true);
    };
    let openModalAddTask = (id) => {
        setTargetBoardItemId(id)
        changeToggleModalAddTask(true);
    };

    let deleteTaskInBoardItem = (id, idTargetBoardItem) => {
        deleteTask(id, idTargetBoardItem)
    };

    let boardItemsArr;
    let nameBoard;
    if (conditionForRender) {
        console.log('Data initialization...')
        boardItemsArr = [];
        nameBoard = '';
    } else {
        boardItemsArr = boardData.dataBoard.map(item => <BoardItem 
            deleteBoardItem={deleteBoardItem}
            id={item.id}
            nameBoardItem={item.nameBoardItem}
             boardItemTasks={item.boardItemTasks}
             openModalAddTask={openModalAddTask}
             deleteTaskInBoardItem={deleteTaskInBoardItem}
             doneTask={doneTask}
             moveTask={moveTask}
 />)
        nameBoard = boardData.nameBoard;
    }

    return <>
        <Board
            boardItemsArr={boardItemsArr}
            conditionForRender={conditionForRender}
            nameBoard={nameBoard}
            openModalAddBoardItem={openModalAddBoardItem}
            addBoardItemWindow={addBoardItemWindow}
            addNewTaskWindow={addNewTaskWindow}
             />
    </>
};

let mapStateToProps = (state) => {
    return {
        addNewTaskWindow: state.appPage.toggleModalWindows.addNewTaskWindow,
        addBoardItemWindow: state.appPage.toggleModalWindows.addBoardItemWindow,
        currentBoardId: state.appPage.currentBoardId,
        boardData: state.appPage.data[state.appPage.currentBoardIndex]
    }
};

export default connect(mapStateToProps, { 
    setBoardIndex, 
    changeToggleModalAddBoardItem, 
    changeToggleModalAddTask, 
    setTargetBoardItemId, 
    deleteBoardItem,
    deleteTask,
    doneTask,
    moveTask })(BoardContainer);